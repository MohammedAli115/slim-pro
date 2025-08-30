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
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "الدكتور سعدالله سليم عمرو",
    role: "أخصائي زراعة الأسنان ورفع الجيوب الأنفية",
    image: "/assets/team images/team1.jpg",
    bio: `
لقب BDS من جامعة 6 أكتوبر 2014
لقب DMD من وزارة الصحة الإسرائيلية 2015
اختصاصي زراعة الأسنان ورفع الجيوب الأنفية جامعة تل أبيب
    `,
  },
  {
    id: 2,
    name: "الدكتورة آيه حسن الفراحين",
    role: "أخصائية تجميل وترميم الأسنان",
    image: "/assets/team images/team2.jpg",
    bio: `
لقب BDS جامعة القدس 2017
دبلوم Baird البريطاني في تجميل وترميم الأسنان 2022
    `,
  },
  {
    id: 3,
    name: "الدكتور محمود القيسي",
    role: "أخصائي أسنان عام",
    image: "/assets/team images/team3.jpg",
    bio: `
لقب BDS من الجامعة الأردنية 2015
    `,
  },
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

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
        loop={teamMembers.length > 3}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#teamModal"
              onClick={() => setSelectedMember(member)}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Modal Bootstrap */}
      <div
        className="modal fade "
        id="teamModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content"
            style={{
              background: "linear-gradient(to right, #2BA3DF, #6dd5ed)",
            }}
          >
            {selectedMember && (
              <>
                <div className="modal-body">
                  <div className="row align-items-center">
                    <div className="col-md-5 text-center mb-3 mb-md-0  order-md-2">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-7 order-md-1 text-white text-center text-md-end">
                      <h5 className="modal-title mb-4">
                        {selectedMember.name}
                      </h5>
                      <h6 className="fw-bold">{selectedMember.role}</h6>
                      <p>{selectedMember.bio}</p>
                    </div>
                  </div>
                </div>
                {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    إغلاق
                  </button>
                </div> */}
              </>
            )}
            {/* <div className="modal-header border-0 mx-auto">
              <button
                style={{ marginBottom :"-130px" , zIndex :"9999"}}
                type="button"
                className="border-0 bg-transparent"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid text-light fa-xmark fs-1 border p-3 rounded-circle text-bg-info"></i>
              </button>
            </div> */}
            <div className="modal-header border-0 mx-auto">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  marginBottom: "-120px",
                  zIndex: "9999",
                  backgroundColor: "#2BA3DF",
                  border: "none",
                  borderRadius: "50%",
                  padding: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fa-solid fa-xmark"
                  style={{
                    fontSize: "22px",
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
