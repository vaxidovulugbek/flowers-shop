import React, { forwardRef } from "react";

interface CardProps {}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	return (
		<div className="carusel__card" ref={ref}>
			<img
				className="carusel__card-img"
				src="https://fiore.vamtam.com/wp-content/uploads/2021/12/3-420x420.jpg"
				alt=""
			/>
		</div>
	);
});

Card.displayName = "Card";

export default Card;
