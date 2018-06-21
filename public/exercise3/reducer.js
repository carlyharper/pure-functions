let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};

// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {

	let stateCopy =  {
		...state,
		todos: [
			...state.todos.map((todo) => {
				return {...todo}
			})
			] 		
	}
	//not done after todos, because the todos array is an object within an array, so have to spread further
	//if the things inside of the array are safe (not objects or other arrays), 
	//if there is at least one item that is an array or an object, use .map
	
	if (action.type == "ADD_TODO") {
		// state.todos.push({
		// 	text: action.todoText,
		// 	isComplete: false
		// });
		// return state;

		stateCopy.todos.push([
			stateCopy.todos.push({
				text: action.todoText,
				isComplete: false
			})
		]);
		return stateCopy;

	} else if (action.type == "TOGGLE_TODO") {
		
		// todoToToggle.isComplete = !todoToToggle.isComplete;
		// return state;

		let todoToToggle = stateCopy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return stateCopy;

	} else {
		return stateCopy;
	}
}
