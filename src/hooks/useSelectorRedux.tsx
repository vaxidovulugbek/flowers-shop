import { useSelector } from "react-redux";
export const useSelectorRedux = () => {
	const test1 = useSelector((state: any) => state.test1);
	const test2 = useSelector((state: any) => state.test2);

	return { test1, test2 };
};
