import { test1 } from "../ActionTypes";

const setResumeTemplate = (templateId: number) => ({
	type: test1,
	payload: templateId,
});

export const Test1 = { setResumeTemplate };
