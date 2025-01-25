import "./App.css";
import { ScrollTop } from "helpers/ScrollToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppProps } from "types/interface";
import { Test1 } from "./redux/actions";
import { useSelectorRedux } from "hooks";

function App({ children }: AppProps) {
	const dispatch = useDispatch();
	const { test1 } = useSelectorRedux();
	useEffect(() => {
		dispatch(Test1.setResumeTemplate(11));
		console.log(test1);
	}, []);
	useEffect(() => {
		console.log(test1);
	}, [test1]);
	return (
		<>
			<ScrollTop />
			{children}
		</>
	);
}

export default App;
