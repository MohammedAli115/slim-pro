import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <div className="about py-5 my-5 overflow-hidden" id="about">
      {/*  Helmet SEO */}
      <Helmet>
        <title>من نحن | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="تعرف على مركز سليم سمايل في رام الله: خبرة مهنية، تقنيات طبية حديثة، وفريق متخصص يقدم خدمات شاملة في طب وتجميل الأسنان بأعلى جودة."
        />
        <meta
          name="keywords"
          content="مركز سليم سمايل, رام الله, تجميل الأسنان, عيادة أسنان, طب الأسنان, فينير, زراعة الأسنان, تركيبات الأسنان"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="من نحن | مركز سليم سمايل – رام الله"
        />
        <meta
          property="og:description"
          content="مركز سليم سمايل يقدم أفضل خدمات طب الأسنان في رام الله، باستخدام أحدث التقنيات وفريق متخصص لصحة وجمال ابتسامتك."
        />
        <meta
          property="og:image"
          content="https://slimsmile.ps/images/about.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ما الذي يميز مركز سليم سمايل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "مزيج من الخبرة الطبية، الأجهزة الرقمية المتطورة، وفريق من الأخصائيين يقدمون حلولًا مخصصة لكل حالة.",
                },
              },
              {
                "@type": "Question",
                name: "هل يقدم المركز خدمات تجميل الأسنان؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، نقدم جميع خدمات التجميل مثل الفينير، التبييض، وتصميم الابتسامة مع ضمان الجودة والدقة.",
                },
              },
              {
                "@type": "Question",
                name: "هل يوجد استشارات أولية؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكنكم حجز استشارة أولية مجانية لتقييم حالتكم ووضع خطة علاج مناسبة.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* UI Content */}
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
              alt="About Slim Smile"
              className="img-fluid rounded-4"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
