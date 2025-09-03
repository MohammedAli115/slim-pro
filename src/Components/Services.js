import React from "react";
import { services } from "./ServicesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "../Services.module.css";

const Services = () => {
  return (
    <div className="container py-5 my-5" id="services">
      {/* Helmet SEO */}
      <Helmet>
        <title>الخدمات | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="اكتشف خدمات مركز سليم سمايل في رام الله: زراعة الأسنان، تجميل الأسنان، القشور الخزفية، التبييض، وغيرها بأحدث التقنيات الطبية."
        />
        <meta
          name="keywords"
          content="خدمات الأسنان, زراعة الأسنان, تجميل الأسنان, القشور الخزفية, تبييض الأسنان, سليم سمايل, رام الله"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="الخدمات | مركز سليم سمايل – رام الله"
        />
        <meta
          property="og:description"
          content="تعرف على جميع خدمات مركز سليم سمايل في رام الله، باستخدام أحدث الأجهزة الطبية وفريق من الأخصائيين."
        />
        <meta
          property="og:image"
          content="https://slimsmile.ps/images/services.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* Services Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "خدمات طب وتجميل الأسنان",
            provider: {
              "@type": "MedicalBusiness",
              name: "مركز سليم سمايل",
              address: {
                "@type": "PostalAddress",
                addressLocality: "رام الله",
                addressCountry: "PS",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدماتنا",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  url: `/articles/${service.slug}`,
                  image: service.image,
                },
              })),
            },
          })}
        </script>
      </Helmet>

      {/* UI Content */}
      <div className="head text-center mb-4">
        <div className="d-flex flex-column align-items-center">
          <h2 className="mb-2 fs-1 fw-bolder">الخدمات</h2>
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
        {services.map((service) => (
          <div
            className="col-6 col-lg-3 col-md-4 col-sm-6 my-4"
            key={service.id}
          >
            <motion.div
              className={styles.container}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <div className={styles.card}>
                <div className={styles.front}>
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={service.title}
                    className={styles.frontHeading}
                  />
                  <h6 className="text-dark text-center">{service.title}</h6>
                </div>
                <div className={styles.back}>
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={service.title}
                    className={styles.backHeading}
                  />
                  <Link
                    to={`/articles/${service.slug}`}
                    className="btn btn-outline-dark"
                  >
                    أقرأ المزيد...
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
