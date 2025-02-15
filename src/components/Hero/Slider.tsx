import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner from "assets/imgs/banner.jpg";

const ProgressSwiper: React.FC = () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			speed={1000}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			pagination={{
				type: "bullets",
				el: ".custom-pagination",
				clickable: true,
			}}
			loop={true}
			modules={[Autoplay, Pagination]}
			className="mySwiper"
		>
			<SwiperSlide>
				<div className="slide-content">
					<img src={banner} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-content">
					<img src={banner} alt="" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-content">
					<img src={banner} alt="" />
				</div>
			</SwiperSlide>

			<div className="custom-pagination"></div>
		</Swiper>
	);
};

export default ProgressSwiper;
