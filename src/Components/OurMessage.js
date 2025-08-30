// import { motion } from "framer-motion";

// function OurMessage() {
//   return (
//     <div className="border-bottom border-top border-2 bg-white">
//       <div
//         className="our-message py-5 overflow-hidden"
//         id="our-message"
//         style={{ borderTop: "1px solid #f0f0f0" }}
//       >
//         <div className="head text-center">
//           <h2
//             className="mb-4 fs-1 fw-bolder"
//             style={{ lineHeight: "1.8", color: "#000" }}
//           >
//             الرساله والرؤيه
//           </h2>
//           <div className="smile-container">
//             <svg
//               viewBox="0 0 200 100"
//               xmlns="http://www.w3.org/2000/svg"
//               style={{ width: "140px", marginTop: "-50px" }}
//             >
//               <path
//                 d="M10,40 Q50,90 190,30"
//                 stroke="#00b3ff"
//                 strokeWidth="8"
//                 fill="none"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="container my-5">
//           <div className="row align-items-center">
//             {/* النص */}
//             <motion.div
//               className="col-md-6 order-2 order-lg-1"
//               style={{ color: "#222" }}
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//                 في <strong>مركز سليم سمايل</strong>، نلتزم بتقديم رعاية أسنان
//                 شاملة ومتقدمة تعتمد على أحدث التقنيات الطبية والتشخيص الدقيق، مع
//                 الالتزام بأعلى معايير الجودة والسلامة.
//               </p>
//               <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//                 هدفنا هو تحسين صحة الفم والأسنان لمرضانا عبر خطط علاجية مخصصة
//                 تلبي احتياجات كل فرد، مع الحرص على توفير بيئة علاجية مريحة
//                 ومهنية تمنح المريض الثقة والاطمئنان.
//               </p>
//               <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//                 نحن نؤمن أن الابتسامة الصحية هي أساس الحياة السعيدة، ولذلك نسعى
//                 لنكون شركاء موثوقين في رحلة العناية بصحة الفم والابتسامة لكل
//                 مريض.
//               </p>
//               <h5 className="mt-3 fw-bold" style={{ color: "#00b3ff" }}>
//                 معًا نحو ابتسامة أكثر صحة وجمالاً
//               </h5>
//             </motion.div>

//             {/* الصورة */}
//             <motion.div
//               className="col-md-6 justify-content-lg-end d-flex order-1 order-lg-2 mb-5 mb-md-0"
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <img
//                 src="assets/ourMessage.jpg"
//                 alt="رسالتنا في مركز سليم سمايل - رعاية أسنان متقدمة"
//                 className="img-fluid rounded-4"
//                 style={{ maxHeight: "450px", objectFit: "cover" }}
//                 loading="lazy"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurMessage;
import { motion } from "framer-motion";

function OurMessage() {
  return (
    <div className="border-bottom border-top border-2 bg-white">
      <div
        className="our-message py-5 overflow-hidden"
        id="our-message"
        style={{ borderTop: "1px solid #f0f0f0" }}
      >
        <div className="head text-center">
          <h2
            className="mb-4 fs-1 fw-bolder"
            style={{ lineHeight: "1.8", color: "#000" }}
          >
            الرسالة والرؤية
          </h2>
          <div className="smile-container">
            <svg
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "140px", marginTop: "-50px" }}
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

        <div className="container my-5">
          <div className="row align-items-center">
            {/* النص */}
            <motion.div
              className="col-md-6 order-2 order-lg-1"
              style={{ color: "#222" }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* الرؤية */}
              <h4 className="fw-bold" style={{ color: "#00b3ff" }}>
                الرؤية (Vision)
              </h4>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
                أن نكون الرائدين في تقديم رعاية الأسنان المتميزة في فلسطين، مع
                التركيز على الابتكار، الجودة، وراحة المرضى، لنصبح الخيار الأول
                لكل من يسعى لصحة فموية مثالية وابتسامة مشرقة.
              </p>

              {/* الرسالة */}
              <h4 className="fw-bold mt-4" style={{ color: "#00b3ff" }}>
                الرسالة (Mission)
              </h4>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
                في <strong>مركز سليم سمايل</strong>، نلتزم بتقديم رعاية أسنان
                شاملة ومتقدمة تعتمد على أحدث التقنيات الطبية والتشخيص الدقيق،
                مع الالتزام بأعلى معايير الجودة والسلامة.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
                هدفنا هو تحسين صحة الفم والأسنان لمرضانا عبر خطط علاجية مخصصة
                تلبي احتياجات كل فرد، مع الحرص على توفير بيئة علاجية مريحة
                ومهنية تمنح المريض الثقة والاطمئنان.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
                نحن نؤمن أن الابتسامة الصحية هي أساس الحياة السعيدة، ولذلك نسعى
                لنكون شركاء موثوقين في رحلة العناية بصحة الفم والابتسامة لكل
                مريض.
              </p>
              <h5 className="mt-3 fw-bold" style={{ color: "#00b3ff" }}>
                معًا نحو ابتسامة أكثر صحة وجمالاً
              </h5>
            </motion.div>

            {/* الصورة */}
            <motion.div
              className="col-md-6 justify-content-lg-end d-flex order-1 order-lg-2 mb-5 mb-md-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="assets/ourMessage.jpg"
                alt="رسالتنا ورؤيتنا في مركز سليم سمايل - رعاية أسنان متقدمة"
                className="img-fluid rounded-4"
                style={{ maxHeight: "450px", objectFit: "cover" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMessage;
