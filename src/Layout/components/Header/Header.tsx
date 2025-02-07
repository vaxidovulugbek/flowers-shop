import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import logo from "assets/imgs/bg.png";

const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<div className="container-box">
					<NavLink to="/">
						<img
							style={{ width: "200px", height: "80px", objectFit: "cover" }}
							src={logo}
							alt="logo"
						/>
					</NavLink>
				</div>
			</header>
		</>
	);
};

export default Header;
