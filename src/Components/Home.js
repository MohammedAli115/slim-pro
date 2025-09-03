import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      {/* Helmet SEO Meta */}
      <Helmet>
        <title>مركز سليم سمايل لطب وتجميل الأسنان | رام الله</title>
        <meta
          name="description"
          content="في مركز سليم سمايل نقدم خدمات شاملة في طب وجراحة الأسنان، مع أفضل الأطباء والتقنيات الحديثة. صحتك الفموية وابتسامتك أولويتنا."
        />
        <meta
          name="keywords"
          content="عيادة أسنان رام الله, د. سعدالله عمرو, سليم سمايل, زراعة الأسنان, تقويم الأسنان, تبييض الأسنان, خلع ضرس العقل"
        />

        {/* OG Tags */}
        <meta property="og:title" content="مركز سليم سمايل | ابتسامتك سر ثقتك" />
        <meta
          property="og:description"
          content="خدمات شاملة في طب وجراحة الفم والأسنان مع فريق متخصص في رام الله. ابتسامتك هي سر ثقتك."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=Saleem+Smile+Clinic"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* Structured Data (Schema) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "مركز سليم سمايل لطب وتجميل الأسنان",
            description:
              "مركز متخصص في جراحة وتجميل الأسنان في رام الله يقدم زراعة الأسنان، تقويم الأسنان، وحلول متقدمة لطب الفم.",
            url: "https://saleemsmile.com",
            image:
              "https://via.placeholder.com/1200x630.png?text=Saleem+Smile+Clinic",
            address: {
              "@type": "PostalAddress",
              addressLocality: "رام الله",
              streetAddress:
                "شارع الإرسال - مقابل المقاطعة - عمارة قطن - الطابق الرابع",
              addressCountry: "PS",
            },
            telephone: "+97000000000",
          })}
        </script>

        {/* تحسين الـ Performance للفيديو */}
        <link rel="preload" as="video" href="/assets/video/video-VEED.mp4" />
      </Helmet>

      <div className="home-page position-relative" id="home">
        {/* خلفية الفيديو */}
        <div className="video">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/video/poster.jpg" // صورة مصغرة للفيديو لتحسين الأداء
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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

          <a
            href="#contact"
            className="btn btn-info px-4 py-2 fw-bold shadow-sm"
          >
            إحجز إستشارة الآن
            <i className="fa-solid fa-arrow-left me-3"></i>
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
