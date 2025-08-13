import React from "react";
import { services } from "./ServicesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../Services.module.css";

const Services = () => {
  return (
    <div
      className="container py-5 my-5"
      id="services"
      style={{ borderTop: "1px solid #ccc" }}
    >
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
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
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
                    to={`/services/${service.id}`}
                    type="button"
                    className="btn btn-outline-dark -3"
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
