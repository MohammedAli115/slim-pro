import React, { memo } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import logo from "../images/logo-removebg-preview.png";

function Navbar() {
  return (
    <>
      {/* Helmet SEO */}
      <Helmet>
        <title>الرئيسية | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="مركز سليم سمايل في رام الله يقدم خدمات شاملة في طب وتجميل الأسنان باستخدام أحدث التقنيات وفريق متخصص لابتسامة صحية وجميلة."
        />
        <meta
          name="keywords"
          content="سليم سمايل, رام الله, تجميل الأسنان, زراعة الأسنان, تبييض الأسنان, عيادة أسنان"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="الرئيسية | مركز سليم سمايل – رام الله"
        />
        <meta
          property="og:description"
          content="عيادات سليم سمايل – ثقة، خبرة، وتقنيات حديثة لصحة وجمال ابتسامتك."
        />
        <meta
          property="og:image"
          content="https://slimsmile.ps/images/logo-share.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
      </Helmet>

      {/* UI Navbar */}
      <div dir="rtl">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-0 bg-blur"
          style={{
            background: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(10px) saturate(120%)",
            WebkitBackdropFilter: "blur(10px) saturate(120%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 6px 24px rgba(16,24,40,0.08)",
          }}
        >
          <div className="container d-flex flex-row-reverse align-items-center justify-content-between">
            <HashLink smooth className="navbar-brand" to="/#home">
              <img
                src={logo}
                alt="شعار مركز سليم سمايل"
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              />
            </HashLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                {[
                  { label: "الرئيسيه", to: "/#home" },
                  { label: "من نحن", to: "/#about" },
                  { label: "الخدمات", to: "/#services" },
                  { label: "الطاقم", to: "/#team" },
                  { label: "الأنشطة", to: "/#activities" },
                  {
                    label: "آراء مراجعينا",
                    href: "https://reviews.saleemsmile.com",
                    external: true,
                  },
                  { label: "مقالات وأبحاث", to: "/articles" },
                  { label: "تواصل معنا", to: "/#contact" },
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    {item.external ? (
                      <a
                        className="nav-link fs-5"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#00ACE7" }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <HashLink
                        smooth
                        className={`nav-link fs-5 ${
                          item.to === "/#home" ? "active" : ""
                        }`}
                        to={item.to}
                        style={{
                          color: item.to === "/#home" ? "#0078d7" : "#00ACE7",
                        }}
                      >
                        {item.label}
                      </HashLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default memo(Navbar);
