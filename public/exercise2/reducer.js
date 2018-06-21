let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;

	let stateCopy = {
		...state,
		counters : [
			...state.counters
		]
	};

	if (type == "INCREMENT") {
		// state.counters[counterIndex]++;
		// return state;

		stateCopy.counters[counterIndex]++;
		return stateCopy;

		// another option:
		// return {
		// 	counters: [
		// 		...state.counters.slice(0, counterIndex),
		// 		state.counters[counterIndex],
		// 		...state.counters.slice(counterIndex + 1);
		// 	]
		// }

	} else if (type == "ADD_COUNTER") {
		//state.counters.push(0);
		//return state;

		stateCopy.counters.push(0);
		return stateCopy;

	} else {
		return stateCopy;
	}
}
