// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";

const ProjectSlider = () => {
  const images = ["/taskproj.png", "/taskproj.png", "/taskproj.png"];
  const swiperRef = useRef(null);
  return (
    <div className="flex swiper-container relative h-fit max-h-[85vh]">
      <Swiper
        ref={swiperRef}
        spaceBetween={110}
        speed={1000}
        slidesPerView={1.3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              src={image}
              className="w-full h-fit"
              width={800}
              height={800}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute left-[7.5vw] h-full w-fit z-50"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <svg
          className="w-[2.5vw] h-fit"
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.588065 10.0426L7.64881 0.527588H9.76326L3.41992 9.21193H33.8516V10.8733H3.41992L9.76326 19.5576H7.64881L0.588065 10.0426Z"
            fill="#121212"
          />
        </svg>
      </button>
      <button
        className="absolute right-[7.5vw] h-full z-50 w-fit"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <svg
          className="w-[2.5vw] h-fit"
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.8924 9.5426L26.8317 0.0275879H24.7172L31.0606 8.71193H0.628906V10.3733H31.0606L24.7172 19.0576H26.8317L33.8924 9.5426Z"
            fill="#121212"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProjectSlider;
