import React from "react";
import "./styles.scss";
// import { NavLink } from "react-router-dom";
// import logo from "assets/imgs/bg.png";
// import RoutesPath from "helpers/RoutesPath";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
	return (
		<>
			<header className="header py-4">
				<div className="container-box">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							{/* <NavLink to="/">
								<img
									style={{ width: "200px", height: "80px", objectFit: "cover" }}
									src={logo}
									alt="logo"
								/>
							</NavLink> */}
							<div className="flex items-center gap-5">
								<span>+(998) 90 278-20-92</span>
								<span>Tashkent</span>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<ShoppingOutlined />
							<UserOutlined />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
