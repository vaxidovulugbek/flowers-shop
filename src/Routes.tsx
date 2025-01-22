import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutesPath from "helpers/RoutesPath";
import App from "./App";
import { Loading } from "components/Loading/Loading";
import Layout from "Layout/Layout";

// const Home = lazy(() => import("pages/Home/Home"));
const ErrorPage = lazy(() => import("pages/Error/index"));

const routes = [
	// { path: RoutesPath?.home, element: <Home /> },
	{ path: RoutesPath?.error, element: <ErrorPage /> },
];

export const AllRoutes: React.FC = () => {
	return (
		<App>
			<Layout>
				<Suspense fallback={<Loading />}>
					<Routes>
						{routes.map(({ path, element }, i) => (
							<Route key={i} path={path} element={element} />
						))}
					</Routes>
				</Suspense>
			</Layout>
		</App>
	);
};
