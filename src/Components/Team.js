import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../TeamSlider.css";
import { motion } from "framer-motion";

const images = [
  "/assets/team images/team1.jpg",
  "/assets/team images/team2.jpg",
  "/assets/team images/team3.jpg",
  // "/assets/team images/team4.jpg",
//   "/assets/team images/team5.jpg",
//   "/assets/team images/team6.jpg",
//   "/assets/team images/team7.jpg",
//   "/assets/team images/team8.jpg",
//   "/assets/team images/team9.jpg",
//   "/assets/team images/team10.jpg",
//   "/assets/team images/team11.jpg",
];

function Team() {
  return (
    <motion.div
      className="slider-container d-flex flex-column"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id="team"
    >
      <div className="head text-center">
        <div className="d-flex flex-column align-items-center">
          <h2 className="mb-2 fs-1 fw-bolder">الطاقم الطبي</h2>
          <svg
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "140px", marginTop: "-30px" }}
          >
            <path
              d="M10,40 Q50,90 190,30"
              stroke="#00b3ff"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <Swiper
        effect="coverflow"
        loop={images.length > 3}
        grabCursor={true}
        // loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </motion.div>
  );
}

export default Team;
