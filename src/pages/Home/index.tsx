import About from "components/About/About";
import Hero from "components/Hero/Hero";
import Carusel from "components/Carusel/Carusel";
import React from "react";

const index = () => {
	return (
		<main>
			<Hero />
			<About />
			<Carusel />
		</main>
	);
};

export default index;
