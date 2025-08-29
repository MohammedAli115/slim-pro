// import React from "react";
// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <div className="home-page position-relative" id="home">
//       <div className="video">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{ width: "100%", minHeight: "100vh", objectFit: "cover" }}
//         >
//           <source src="/assets/video/video-VEED.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <motion.div
//         className="text position-absolute top-50 w-100 start-50 text-center text-white translate-middle"
//         style={{ maxWidth: "500px" }}
//         initial={{ opacity: 0, y: "100%" }}
//         animate={{ opacity: 1, y: "-50%" }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="fs-1 mb-3">إبتسامتك سر ثقتك</h2>
//         <p>
//           في عيادات سليم سمايل، بنقدملك أفضل رعاية في طب وجراحة الفم والأسنان
//           على يد نخبة من الأطباء المتخصصين. صحتك الفموية وراحتك أولويتنا.
//         </p>
//         <a href="#contact" type="button" className="btn btn-outline-info">
//           إحجز إستشارة الآن
//         </a>
//       </motion.div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home-page position-relative" id="home">
      {/* خلفية الفيديو */}
      <div className="video">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", minHeight: "100vh", objectFit: "cover" }}
        >
          <source src="/assets/video/video-VEED.mp4" type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو
        </video>
      </div>

      {/* النص فوق الفيديو */}
      <motion.div
        className="text position-absolute top-50 start-50 translate-middle text-center text-white"
        style={{ padding: "0 15px", width: "100%", maxWidth: "600px" }}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ duration: 1 }}
      >
        <h1
          className="fw-bold mb-4"
          style={{ fontSize: "2.5rem", lineHeight: "1.4" }}
        >
          إبتسامتك سر ثقتك
        </h1>

        <p
          className="mb-4"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          في <strong style={{ color: "#00b3ff" }}>عيادات سليم سمايل</strong>،
          نقدم لك أفضل رعاية في{" "}
          <span style={{ fontWeight: "600" }}>طب وجراحة الفم والأسنان</span> على
          يد نخبة من الأطباء المتخصصين. صحتك الفموية وراحتك هي{" "}
          <span style={{ color: "#00b3ff", fontWeight: "600" }}>
            أولويتنا دائمًا
          </span>
          .
        </p>

        <a href="#contact" className="btn btn-info px-4 py-2 fw-bold shadow-sm">
          إحجز إستشارة الآن
          <i className="fa-solid fa-arrow-left me-3"></i>
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
