import "./App.css";
import { ScrollTop } from "helpers/ScrollToTop";
import { AppProps } from "types/interface";

function App({ children }: AppProps) {
	return (
		<>
			<ScrollTop />
			{children}
		</>
	);
}

export default App;
