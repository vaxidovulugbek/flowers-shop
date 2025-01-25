// reducer.ts
import { test1, test2 } from "./ActionTypes";

interface MyStore {
	test1: any;
	test2: any;
}

const initialState: MyStore = {
	test1: 1, // Masalan, boshlang'ich template ID
	test2: null,
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case test1:
			return {
				...state,
				resumeTemplate: action.payload,
			};
		case test2:
			return {
				...state,
				resumeName: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
