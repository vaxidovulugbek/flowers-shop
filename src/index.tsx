import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/index.scss";
import { AllRoutes } from "Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<BrowserRouter>
				{/* <App /> */}
				<AllRoutes />
			</BrowserRouter>
		</Provider>
	</QueryClientProvider>
);
