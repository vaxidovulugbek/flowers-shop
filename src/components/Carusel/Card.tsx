import React, { forwardRef } from "react";
import { Title } from "ui/index";

type CardProps = {
	title?: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	return (
		<div className="carusel__card" ref={ref}>
			<img
				className="carusel__card-img"
				src="https://fiore.vamtam.com/wp-content/uploads/2021/12/3-420x420.jpg"
				alt=""
			/>
			{props.title && (
				<Title
					className="carusel__card-title text-center capitalize"
					as="h4"
					text={props.title}
				/>
			)}
		</div>
	);
});

Card.displayName = "Card";

export default Card;
