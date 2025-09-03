import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [treatmentType, setTreatmentType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const treatmentTypeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phoneNumber === "" || treatmentType === "") {
      if (name === "") {
        nameRef.current.focus();
      } else if (phoneNumber === "") {
        phoneNumberRef.current.focus();
      } else if (treatmentType === "") {
        treatmentTypeRef.current.focus();
      }
      return;
    }
    setError("");

    const whatsappNumber = "+201020862114";
    const text = `الاسم: ${name}%0Aرقم الهاتف: ${phoneNumber}%0Aالإيميل: ${
      email || "لا يوجد"
    }%0Aنوع العلاج: ${treatmentType}%0Aالرسالة: ${message || treatmentType}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="container py-5"
      id="contact"
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/*  SEO Helmet */}
      <Helmet>
        <title>تواصل معنا | مركز سليم سمايل - رام الله</title>
        <meta
          name="description"
          content="تواصل مع مركز سليم سمايل في رام الله لحجز موعد أو استشارة حول خدمات زراعة الأسنان، تقويم الأسنان، تجميل الأسنان والعلاجات الوقائية."
        />
        <meta
          name="keywords"
          content="تواصل معنا, مركز سليم سمايل, رام الله, حجز موعد أسنان, استشارة أسنان, عيادة أسنان"
        />

        {/* OG Tags */}
        <meta property="og:title" content="تواصل معنا | مركز سليم سمايل" />
        <meta
          property="og:description"
          content="اتصل بنا الآن لحجز موعدك في مركز سليم سمايل – رام الله، أفضل خدمات طب الأسنان بخبرة وجودة عالية."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/800x450.png?text=Contact+Slim+Smile"
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
                name: "كيف أحجز موعد في مركز سليم سمايل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يمكنك الحجز عبر الاتصال الهاتفي، أو من خلال نموذج التواصل على موقعنا، أو عبر واتساب مباشرة.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكنني الاستشارة عبر الإنترنت؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، يمكنك إرسال استفسارك عبر واتساب وسيرد عليك فريقنا لتقديم المشورة الأولية.",
                },
              },
              {
                "@type": "Question",
                name: "أين يقع مركز سليم سمايل؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نحن موجودون في مدينة رام الله، ويمكنك التواصل معنا للحصول على الموقع الدقيق عبر خرائط جوجل.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="head text-center">
        <div className="d-flex flex-column align-items-center">
          <h2 className="mb-2 fs-1 fw-bolder">تواصل معنا</h2>
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

      {error && <p className="text-danger">{error}</p>}

      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="name" className="form-label ms-2">
              الإسم
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="name"
              placeholder="اسم المستخدم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label ms-2">
              رقم الهاتف
            </label>
            <input
              type="number"
              className="form-control"
              required
              id="phoneNumber"
              placeholder="رقم الهاتف"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="treatmentType" className="form-label ms-2">
              نوع العلاج
            </label>
            <select
              className="form-select"
              required
              aria-label="نوع العلاج"
              value={treatmentType}
              onChange={(e) => setTreatmentType(e.target.value)}
              id="treatmentType"
              ref={treatmentTypeRef}
            >
              <option value="">-- اختر نوع العلاج --</option>
              <option value="زراعة الأسنان">زراعة الأسنان</option>
              <option value="تجميل الأسنان">تجميل الأسنان</option>
              <option value="تقويم الأسنان">تقويم الأسنان</option>
              <option value="العلاج الوقائي">العلاج الوقائي</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="mb-3">
            <label htmlFor="email" className="form-label ms-2">
              الإيميل
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="(اختياري) البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label ms-2">
              الرسالة
            </label>
            <textarea
              className="form-control py-4"
              id="message"
              rows="3"
              placeholder="اكتب رسالتك هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-info m-auto mt-3 text-dark"
          style={{ width: "fit-content" }}
        >
          إرسال عبر واتساب
          <i className="fa-brands fa-whatsapp me-2 text-success"></i>
        </button>
      </div>
    </motion.div>
  );
}

export default Contact;
