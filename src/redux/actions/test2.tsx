import * as ActionTypes from "../ActionTypes";

const createResumeAction = (type: string, payload: any) => ({ type, payload });

export const Test2 = {
	setResumeName: (name: string | null) => createResumeAction(ActionTypes.test2, name),
};
