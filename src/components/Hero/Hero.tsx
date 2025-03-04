import React, { useEffect, useState } from "react";
import ProgressSwiper from "./Slider";
import { Button } from "ui/index";

function Hero() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setOffset(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div className="hero relative">
			<div className="container-box">
				<ProgressSwiper />
			</div>
			<span
				className="hero__line"
				style={{
					position: "absolute",
					left: "50%",
					bottom: "-55px",
					transform: `translate(-50%, ${offset * 0.1}px)`,
					height: "110px",
					borderLeft: "1px solid #ccc",
					transition: "transform 0.1s ease-out",
					zIndex: 10,
				}}
			></span>
			<Button className="hero__btn" text="sotib olish" />
		</div>
	);
}

export default Hero;
