import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function OurMessage() {
  return (
    <div
      className="our-message border-bottom border-top border-2 bg-white py-5 my-5 overflow-hidden"
      id="our-message"
    >
      {/* Helmet SEO */}
      <Helmet>
        <title>الرسالة والرؤية | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="اكتشف رسالة ورؤية مركز سليم سمايل في رام الله: التميز في رعاية الأسنان باستخدام أحدث التقنيات الطبية، مع الالتزام بالابتكار، الجودة، وراحة المرضى."
        />
        <meta
          name="keywords"
          content="مركز سليم سمايل, رسالة المركز, رؤية المركز, رام الله, رعاية الأسنان, صحة الفم, تجميل الأسنان"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="الرسالة والرؤية | مركز سليم سمايل – رام الله"
        />
        <meta
          property="og:description"
          content="رؤيتنا أن نكون الرائدين في رعاية الأسنان بفلسطين ورسالتنا تقديم أفضل الخدمات بأحدث التقنيات وبمعايير عالمية."
        />
        <meta
          property="og:image"
          content="https://slimsmile.ps/assets/ourMessage.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "الرسالة والرؤية - مركز سليم سمايل",
            description:
              "تعرف على رسالة ورؤية مركز سليم سمايل لتقديم رعاية الأسنان المتقدمة والابتكار في فلسطين.",
          })}
        </script>
      </Helmet>

      {/* UI Content */}
      <div className="head text-center">
        <h2 className="mb-4 fs-1 fw-bolder" style={{ lineHeight: "1.8" }}>
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
            {/* Vision */}
            <h4 className="fw-bold" style={{ color: "#00b3ff" }}>
              الرؤية (Vision)
            </h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              أن نكون الرواد في تقديم رعاية الأسنان المتميزة في فلسطين، مع
              التركيز على الابتكار، الجودة، وراحة المرضى، لنصبح الخيار الأول لكل
              من يسعى لصحة فموية مثالية وابتسامة مشرقة.
            </p>

            {/* Mission */}
            <h4 className="fw-bold mt-4" style={{ color: "#00b3ff" }}>
              الرسالة (Mission)
            </h4>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              في <strong>مركز سليم سمايل</strong>، نلتزم بتقديم رعاية أسنان
              شاملة ومتقدمة تعتمد على أحدث التقنيات الطبية والتشخيص الدقيق، مع
              الالتزام بأعلى معايير الجودة والسلامة.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              هدفنا هو تحسين صحة الفم والأسنان لمرضانا عبر خطط علاجية مخصصة تلبي
              احتياجات كل فرد، مع الحرص على توفير بيئة علاجية مريحة تمنح المريض
              الثقة والاطمئنان.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
              نحن نؤمن أن الابتسامة الصحية هي أساس الحياة السعيدة، ولذلك نسعى
              لنكون شركاء موثوقين في رحلة العناية بصحة الفم والابتسامة لكل مريض.
            </p>
            <h5 className="mt-3 fw-bold" style={{ color: "#00b3ff" }}>
              معًا نحو ابتسامة أكثر صحة وجمالاً
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
              decoding="async"
              width="600"
              height="450"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurMessage;
