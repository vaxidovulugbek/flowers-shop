import About from "components/About/About";
import Hero from "components/Hero/Hero";
import Carusel from "components/Carusel/Carusel";
import Info from "components/Info/Info";
import React from "react";

const index = () => {
	return (
		<main>
			<Hero />
			<About />
			<Carusel />
			<Info />
		</main>
	);
};

export default index;
