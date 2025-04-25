import React, { useRef } from "react";
import Card from "./Card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Title } from "ui/index";
import { isArray } from "lodash";

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

	const cards = [
		{ id: 1, title: "Antik gul" },
		{ id: 2, title: "bahor gullari" },
		{ id: 3, title: "g’uncha gullar" },
		{ id: 4, title: "yashil holatdagi gullar" },
		{ id: 5, title: "nafis" },
		{ id: 6, title: "binafsha gul" },
		{ id: 7, title: "atirgul" },
	];

	return (
		<section>
			<div className="container-box">
				<div className="carusel">
					<Title className="carusel__title text-center" as="h3" text="Eng sara gullar" />
					<div className="carusel__cards w-full" ref={carouselRef}>
						{isArray(cards) &&
							cards.map((item, i) => (
								<Card
									key={item.id}
									title={item.title}
									ref={i === 0 ? cardRef : undefined}
								/>
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
