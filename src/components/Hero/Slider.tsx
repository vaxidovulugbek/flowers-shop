import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner1 from "assets/imgs/pexels-cottonbro-4270155.jpg";
import banner2 from "assets/imgs/slider2.jpg";
import banner3 from "assets/imgs/slider3.jpg";

const texts = ["with flowers", "with gifts"];

const letterVariant = {
	hidden: {
		opacity: 0,
		scale: 0.5,
		filter: "blur(8px)",
		y: 20,
	},
	visible: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		y: 0,
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 10,
			mass: 0.8,
		},
	},
};

const AnimatedLetters: React.FC<{ text: string }> = ({ text }) => {
	const letters = text.split("");

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{ staggerChildren: 0.07 }}
			className="flex justify-center text-7xl tracking-wide"
		>
			{letters.map((letter, i) => (
				<motion.span
					key={i}
					variants={letterVariant}
					className="inline-block"
					style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
				>
					{letter === " " ? "\u00A0" : letter}
				</motion.span>
			))}
		</motion.div>
	);
};

const HeroSlider: React.FC = () => {
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setTextIndex((prev) => (prev + 1) % texts.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-screen">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				speed={1200}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				pagination={{ clickable: true, el: ".custom-pagination" }}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				loop={true}
				modules={[Autoplay, Pagination, EffectFade]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="relative h-screen">
						<img src={banner1} alt="banner1" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-black/30" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative h-screen">
						<img src={banner2} alt="banner2" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-black/30" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative h-screen">
						<img src={banner3} alt="banner3" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-black/30" />
					</div>
				</SwiperSlide>
			</Swiper>

			<nav className="swiper-nav">
				<ul className="swiper-nav__list flex items-center">
					<li>Gullar</li>
					<li>O`simliklar</li>
					<li>Sovg`alar</li>
					<li>Jurnal</li>
				</ul>
			</nav>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5, delay: 0.5 }}
				className="absolute top-1/4 left-1/2 z-[100] transform -translate-x-1/2 -translate-y-1/2 text-center"
			>
				{/* <p className="text-xl swiper-text text-white font-light tracking-[0.3em]">
					FLOWERS & GIFTS
				</p> */}
			</motion.div>
			<p className="swiper-text absolute top-[180px] left-1/2 z-[99] transform -translate-x-1/2 -translate-y-1/2 transform text-white text-center">
				Biz hikoyalarni
			</p>
			<div className="swiper-text absolute top-[280px] left-1/2 z-[99] transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={texts[textIndex]}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<AnimatedLetters text={texts[textIndex]} />
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="custom-pagination"></div>
		</div>
	);
};

export default HeroSlider;
