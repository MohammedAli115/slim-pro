import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ArticlesAndResearch = () => {
  const articles = [
    {
      id: 1,
      title: "صحة الفم والأسنان وأمراض القلب",
      description:
        "تعرف على العلاقة الوثيقة بين صحة الفم والأسنان وصحة القلب، وكيف يمكن أن تؤثر أمراض اللثة والتسوس على صحة القلب والشرايين.",
      link: "/articles/oral-health-and-heart",
    },
    {
      id: 2,
      title: "الزراعة المحسوبة للأسنان",
      description:
        "مقال يشرح تقنية الزراعة المحسوبة باستخدام الأشعة ثلاثية الأبعاد والكمبيوتر لضمان دقة عالية وسرعة في النتائج.",
      link: "/articles/guided-implant-surgery",
    },
    {
      id: 3,
      title: "زراعة الأسنان والتركيب الفوري",
      description:
        "تعرف على أحدث تقنيات زراعة الأسنان بالتحميل الفوري التي تختصر الوقت وتوفر ابتسامة طبيعية فور العملية.",
      link: "/articles/dental-immediate-implant",
    },
  ];

  return (
    <div className="container my-5 pt-5">
      {/*  Helmet for SEO */}
      <Helmet>
        <title>المقالات والأبحاث | مركز سليم سمايل - رام الله</title>
        <meta
          name="description"
          content="اطلع على مقالات وأبحاث مركز سليم سمايل في رام الله: صحة الفم وعلاقتها بأمراض القلب، تقويم الأسنان، تبييض الأسنان، والمزيد."
        />
        <meta
          name="keywords"
          content="مقالات الأسنان, أبحاث الأسنان, صحة الفم, تقويم الأسنان, تبييض الأسنان, أمراض القلب, مركز سليم سمايل رام الله"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="المقالات والأبحاث | مركز سليم سمايل"
        />
        <meta
          property="og:description"
          content="اقرأ مقالاتنا البحثية عن صحة الفم وعلاقتها بصحة القلب، فوائد تقويم الأسنان، طرق تبييض الأسنان، وأكثر."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/800x450.png?text=Dental+Articles"
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
                name: "ما أهمية صحة الفم للأسنان والقلب؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تأثير أمراض الفم مثل التهاب اللثة قد يمتد إلى صحة القلب والأوعية الدموية مما يزيد خطر الإصابة بأمراض مزمنة.",
                },
              },
              {
                "@type": "Question",
                name: "ما فوائد تقويم الأسنان؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يساعد على تحسين مظهر الأسنان، تصحيح العضة، وتسهيل تنظيف الأسنان بشكل أفضل.",
                },
              },
              {
                "@type": "Question",
                name: "هل تبييض الأسنان آمن؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم عند إجرائه بمواد طبية معتمدة وتحت إشراف طبيب الأسنان، يعتبر تبييض الأسنان إجراءً آمناً وفعالاً.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Heading */}
      <div className="d-flex flex-column align-items-center">
        <h2 className="mb-2 fs-1 fw-bolder">المقالات والأبحاث</h2>
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

      {/* Articles List */}
      <div className="row g-4">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4">
            <div
              className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <div className="overflow-hidden"></div>

              <div className="card-body text-center">
                <h5 className="card-title fw-bold mb-3">{article.title}</h5>
                <p className="card-text text-muted mb-4">
                  {article.description}
                </p>
                <Link
                  to={article.link}
                  className="btn px-4 text-white fw-semibold"
                  style={{
                    background: "linear-gradient(to right, #2BA3DF, #6dd5ed)",
                    border: "none",
                    borderRadius: "30px",
                  }}
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesAndResearch;
