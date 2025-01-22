import { Footer, Header } from "./components";

const Layout = (props: any) => {
	const { children } = props;

	return (
		<>
			<Header />
			{/* <main className="site-wrapper">{children}</main> */}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
