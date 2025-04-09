import React, { useEffect, useState } from "react";
import img from "assets/imgs/about2.png";
const About: React.FC = () => {
	const [deg, setDeg] = useState(0);

	useEffect(() => {
		const onScroll = () => setDeg(window.scrollY * 0.08);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section className="about" id="circle-section">
			{/* <div className="circle"></div> */}
			<div className="container-box">
				<div className="about__img">
					<img
						src={img}
						alt=""
						style={{
							transform: `rotate(${deg}deg)`,
							transition: "transform 0.1s linear",
							width: "200px",
							height: "200px",
						}}
					/>
				</div>
				<p className="about__text">
					Urug` yerga urilgan kundan boshlab dizayningizni qabul qilingunga qadar, biling
					Sizning gullaringiz hunarmandlar qo`lida bo`lgan.
				</p>
			</div>
		</section>
	);
};

export default About;
