import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Activities() {
  return (
    <div
      className="activities my- py-5"
      id="activities"
      style={{ borderBottom: "1px solid #ccc", overflow: "hidden" }}
    >
      {/*  Helmet SEO */}
      <Helmet>
        <title>الأنشطة المجتمعية | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="اطلع على أنشطة مركز سليم سمايل في رام الله، مثل الزيارات التوعوية للمدارس وحملات التثقيف الصحي لصحة الفم والأسنان."
        />
        <meta
          name="keywords"
          content="أنشطة مركز سليم سمايل, صحة الأسنان, توعية طلابية, رام الله, حملات تثقيف صحي, مبادرات مجتمعية, صحة الفم"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="الأنشطة المجتمعية | مركز سليم سمايل – رام الله"
        />
        <meta
          property="og:description"
          content="مبادرات مركز سليم سمايل لدعم المجتمع من خلال الزيارات التوعوية للمدارس والفحوصات الطبية وخدمات صحة الفم."
        />
        <meta
          property="og:image"
          content="https://slimsmile.ps/images/activities-cover.jpg"
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ar_AR" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ما الهدف من الأنشطة المجتمعية لمركز سليم سمايل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "الهدف هو رفع الوعي بأهمية صحة الفم والأسنان بين الأطفال والشباب من خلال محاضرات توعوية وفحوصات مجانية.",
                },
              },
              {
                "@type": "Question",
                name: "هل يقدم المركز فحوصات للطلاب؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يتم إجراء فحوصات طبية شاملة للطلاب للكشف المبكر عن مشاكل الأسنان وتقديم الإرشادات المناسبة.",
                },
              },
              {
                "@type": "Question",
                name: "كيف يشجع المركز الطلاب على زيارة طبيب الأسنان؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "من خلال دمج الأنشطة الترفيهية مثل حضور مهرج أثناء الزيارة، لكسر حاجز الخوف وجعل التجربة إيجابية.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="container">
        <div className="head text-center mb-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="mb-2 fs-1 fw-bolder">الأنشطة</h2>
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

        <div className="row">
          {/* TEXT */}
          <motion.div
            className="col-lg-6 col-md-12 text-end"
            style={{ letterSpacing: "1.2px", lineHeight: "30px" }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p>
              في إطار التزام مركز <strong>سليم سمايل</strong> بدوره المجتمعي في
              تعزيز صحة الفم والأسنان، قمنا بتنظيم زيارة ميدانية إلى مدرسة
              البكالوريا في رام الله.
            </p>
            <p>
              خلال الزيارة، قدم فريقنا المختص ورش عمل ومحاضرات توعوية شاملة تهدف
              إلى نشر الوعي بأهمية العناية الصحية اليومية بالفم والأسنان بين
              الطلاب. كما أجرينا فحوصات طبية دقيقة للطلاب للكشف المبكر عن أي
              مشاكل صحية، مع تقديم الإرشادات اللازمة للحفاظ على صحة أسنانهم.
            </p>
            <p>
              ولكسر حاجز الخوف لدى الطلاب من زيارة طبيب الأسنان، قمنا باستدعاء
              مهرج محترف أضفى جوًا من المرح والراحة، مما ساعد على خلق بيئة
              إيجابية ومشجعة.
            </p>
            <p>
              تأتي هذه المبادرة ضمن جهود المركز المستمرة لدعم المجتمع المحلي من
              خلال التثقيف الصحي والخدمات الوقائية، مع التأكيد على أهمية بناء
              جيل واعٍ يولي اهتمامًا لصحة فمه وابتسامته.
            </p>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            className="video col-lg-6 col-md-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <video
              className="rounded"
              muted
              autoPlay
              loop
              controls
              playsInline
              preload="metadata"
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
            >
              <source src="/assets/video/active-video.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
