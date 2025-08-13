import React from "react";
import { useParams } from "react-router-dom";
import { services } from "./ServicesData";
import { HashLink } from "react-router-hash-link";

function ServicesDetails() {
  const { id } = useParams();

  const service = services.find((service) => service.id === +id);

  if (!service) {
    return <h2 className="mt-5 pt-5">الخدمة غير موجودة</h2>;
  }

  return (
    <div className="container my-5 pt-5 text-center">
      <div className="">
        <div className="head text-center mb-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="mb-2 fs-1 fw-bolder">{service.title}</h2>
            <svg
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "140px", marginTop: "-30px", zIndex: "-222" }}
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
        <div>
          <img
            src={service.image}
            alt={service.title}
            className="img-fluid rounded-4 my-3"
            loading="lazy"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <p>{service.article}</p>
      <HashLink to="/#contact" className="btn btn-dark mt-3">
        اطلب الخدمة
      </HashLink>
    </div>
  );
}

export default ServicesDetails;
