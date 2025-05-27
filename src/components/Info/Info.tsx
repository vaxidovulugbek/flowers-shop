import React, { useEffect, useState } from "react";
import { Text, Title } from "ui/index";
import flower from "assets/imgs/info.jpg";

function Info() {
	const [scale, setScale] = useState<number>(1);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const newScale = Math.min(1 + scrollY * 0.0002, 1.1); // maksimal 1.1
			setScale(newScale);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section>
			<div className="info">
				<div className="info__img">
					<img
						style={{
							transform: `scale(${scale})`,
							transition: "transform 0.1s linear",
						}}
						src={flower}
						alt="flowers"
					/>
				</div>
				<div className="info__content">
					<div>
						<Title as="h2" text="Korporativ tadbirlar" className="info__title" />
						<Text
							as="p"
							className="info__text"
							text="Bizning iste'dodli jamoamiz g‘ayrioddiy va esda qolarli gul naqshlari bilan noyob korporativ tadbirlarni tashkil etadi. Agar siz oddiy va qulay uslubdagi tadbirlarni xush ko‘rsangiz, bizning gullar ularni yanada bezakli va unutilmas qiladi."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Info;
