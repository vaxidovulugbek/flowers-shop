import React, { useEffect, useRef } from "react";
import { Text, Title } from "ui/index";
import flower from "assets/imgs/info.jpg";

function Info() {
	const imgRef = useRef<HTMLImageElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current || !imgRef.current) return;

			const rect = sectionRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.top < windowHeight && rect.bottom > 0) {
				const visibleRatio = 1 - rect.top / windowHeight;
				const scale = 1 + Math.min(visibleRatio, 1) * 0.11; // scale: 1 → 1.2

				imgRef.current.style.transform = `scale(${scale.toFixed(3)})`;
			} else {
				imgRef.current.style.transform = "scale(1)";
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section>
			<div className="info" ref={sectionRef}>
				<div className="info__img">
					<img
						ref={imgRef}
						src={flower}
						alt="flowers"
						style={{
							transition: "transform 0.3s ease-out",
							willChange: "transform",
						}}
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
