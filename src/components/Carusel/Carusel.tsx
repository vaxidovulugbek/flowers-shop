import React, { useRef } from "react";
import Card from "./Card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Carusel: React.FC = () => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null); // Card o'lchamini olish uchun

	const getScrollAmount = () => {
		const cardWidth = cardRef.current?.clientWidth || 0;
		const gap = 30; // Gap siz SCSSda bergansiz
		return cardWidth + gap;
	};

	const scrollLeft = () => {
		carouselRef.current?.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
	};

	const scrollRight = () => {
		carouselRef.current?.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
	};
	return (
		<section>
			<div className="container-box">
				<div className="carusel">
					<div className="carusel__cards w-full" ref={carouselRef}>
						{Array.from({ length: 7 }).map((_, i) => (
							<Card key={i} ref={i === 0 ? cardRef : undefined} />
						))}
					</div>

					<button className="carusel__btn carusel__btn--left" onClick={scrollLeft}>
						<LeftOutlined />
					</button>
					<button className="carusel__btn carusel__btn--right" onClick={scrollRight}>
						<RightOutlined />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Carusel;
