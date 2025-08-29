// import React from "react";
// import { motion } from "framer-motion";

// function About() {
//   return (
//     <div className="about py-5 my-5 overflow-hidden" id="about">
//       <div className="container">
//         <div className="row align-items-center">
//           <motion.div
//             className="col-md-6"
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="head">
//               <h2 className="mb-4 fs-1 fw-bolder">من نحن</h2>
//               <div className="smile-container">
//                 <svg
//                   viewBox="0 0 200 100"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{ width: "140px", marginTop: "-50px" }}
//                 >
//                   <path
//                     d="M10,40 Q50,90 190,30"
//                     stroke="#00b3ff"
//                     strokeWidth="8"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="py-2">مركز سليم سمايل</h3>
//             <p>
//               في مركز سليم سمايل، نجمع بين الخبرة المهنية والتقنيات الطبية
//               الحديثة لتقديم أفضل خدمات طب الأسنان في بيئة متطورة ومريحة.
//             </p>
//             <p>
//               يضم مركزنا فريقًا من الأخصائيين في مختلف التخصصات، مزودين بأحدث
//               الأجهزة المتقدمة، بما في ذلك أجهزة الأشعة البانورامية الرقمية،
//               لنضمن تشخيصًا دقيقًا وعلاجًا فعالًا يلبي تطلعاتكم.
//             </p>
//             <p>
//               في سليم سمايل، لا نقتصر على علاج الأسنان فقط، بل نحرص على تصميم
//               ابتسامة تعكس ثقتكم وجمالكم، لأن ابتسامتكم هي مفتاح أول انطباع
//               مميز.
//             </p>
//             <p>
//               اختياركم لنا هو استثمار في صحة فمكم وابتسامتكم المستقبلية، ونحن
//               هنا لنرافقكم في كل خطوة نحو أفضل نسخة من ابتسامتكم.
//             </p>
//             <h5 className="mt-3">سليم سمايل… لابتسامة أكثر صحة</h5>
//             <a href="#contact" type="button" className="btn btn-info my-3">
//               إحجز إستشارة الآن
//             </a>
//           </motion.div>

//           <motion.div
//             className="col-md-6"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="/assets/about/about.jpg"
//               loading="lazy"
//               alt="About Us"
//               className="img-fluid rounded-4"
//               style={{ height: "450px" }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
// import React from "react";
// import { motion } from "framer-motion";

// function About() {
//   return (
//     <div className="about py-5 my-5 overflow-hidden" id="about">
//       <div className="container">
//         <div className="row align-items-center">
//           <motion.div
//             className="col-md-6"
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="head">
//               <h2 className="mb-4 fs-1 fw-bolder" style={{ lineHeight: "1.8" }}>
//                 من نحن
//               </h2>
//               <div className="smile-container">
//                 <svg
//                   viewBox="0 0 200 100"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{ width: "140px", marginTop: "-50px" }}
//                 >
//                   <path
//                     d="M10,40 Q50,90 190,30"
//                     stroke="#00b3ff"
//                     strokeWidth="8"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="py-2 fw-bold">مركز سليم سمايل</h3>
//             <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//               في مركز سليم سمايل، نجمع بين الخبرة المهنية والتقنيات الطبية
//               الحديثة لتقديم أفضل خدمات طب الأسنان في بيئة متطورة ومريحة.
//             </p>
//             <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//               يضم مركزنا فريقًا من الأخصائيين في مختلف التخصصات، مزودين بأحدث
//               الأجهزة المتقدمة، بما في ذلك أجهزة الأشعة البانورامية الرقمية،
//               لنضمن تشخيصًا دقيقًا وعلاجًا فعالًا يلبي تطلعاتكم.
//             </p>
//             <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//               في سليم سمايل، لا نقتصر على علاج الأسنان فقط، بل نحرص على تصميم
//               ابتسامة تعكس ثقتكم وجمالكم، لأن ابتسامتكم هي مفتاح أول انطباع
//               مميز.
//             </p>
//             <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
//               اختياركم لنا هو استثمار في صحة فمكم وابتسامتكم المستقبلية، ونحن
//               هنا لنرافقكم في كل خطوة نحو أفضل نسخة من ابتسامتكم.
//             </p>
//             <h5 className="mt-3 text-info fw-bold">
//               سليم سمايل… لابتسامة أكثر صحة
//             </h5>
//             <a href="#contact" type="button" className="btn btn-info my-3">
//               إحجز إستشارة الآن
//             </a>
//           </motion.div>

//           <motion.div
//             className="col-md-6 d-none d-md-block"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="/assets/about/about.jpg"
//               loading="lazy"
//               alt="About Us"
//               className="img-fluid rounded-4"
//               style={{ height: "450px", objectFit: "cover" }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about py-5 my-5 overflow-hidden" id="about">
      <div className="head text-center">
        <h2 className="mb-4 fs-1 fw-bolder" style={{ lineHeight: "1.8" }}>
          من نحن
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
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="py-2 fw-bold">مركز سليم سمايل</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              في مركز سليم سمايل، نجمع بين الخبرة المهنية والتقنيات الطبية
              الحديثة لتقديم أفضل خدمات طب الأسنان في بيئة متطورة ومريحة.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              يضم مركزنا فريقًا من الأخصائيين في مختلف التخصصات، مزودين بأحدث
              الأجهزة المتقدمة، بما في ذلك أجهزة الأشعة البانورامية الرقمية،
              لنضمن تشخيصًا دقيقًا وعلاجًا فعالًا يلبي تطلعاتكم.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              في سليم سمايل، لا نقتصر على علاج الأسنان فقط، بل نحرص على تصميم
              ابتسامة تعكس ثقتكم وجمالكم، لأن ابتسامتكم هي مفتاح أول انطباع
              مميز.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              اختياركم لنا هو استثمار في صحة فمكم وابتسامتكم المستقبلية، ونحن
              هنا لنرافقكم في كل خطوة نحو أفضل نسخة من ابتسامتكم.
            </p>
            <h5 className="mt-3 text-info fw-bold">
              سليم سمايل… لابتسامة أكثر صحة
            </h5>
            <a href="#contact" type="button" className="btn btn-info my-3 px-4">
              إحجز إستشارة الآن
            </a>
          </motion.div>

          <motion.div
            className="col-md-6 d-none d-md-block"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/assets/about/about.jpg"
              loading="lazy"
              alt="About Us"
              className="img-fluid rounded-4"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
