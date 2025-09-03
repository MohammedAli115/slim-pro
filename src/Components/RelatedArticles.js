import React from "react";
import { Link } from "react-router-dom";

function RelatedArticles() {
  const articles = [
    { name: "حشوات تجميلية", link: "/articles/cosmetic-fillings" },
    { name: "زراعة الأسنان", link: "/articles/dental-implants" },
    { name: "الزراعة الرقمية", link: "/articles/guided-implant-surgery" },
    { name: "زراعة تحت التخدير الكامل", link: "/articles/full-anesthesia-implant" },
    { name: "صحة الفم والقلب", link: "/articles/oral-health-and-heart" },
    { name: "تقويم الأسنان", link: "/articles/orthodontics" },
    { name: "أمراض اللثة", link: "/articles/gum-diseases" },
    { name: "تركيبات الأسنان", link: "/articles/dental-crowns" },
    { name: "علاج العصب", link: "/articles/root-canal" },
    { name: "القشور الخزفية (فينير)", link: "/articles/decorative-veneers" },
    { name: "خلع ضرس العقل", link: "/articles/wisdom-teeth" },
  ];

  return (
    <div className="container my-4">
      <h5 className="fw-bold mb-3">مقالات ذات صلة</h5>
      <div className="d-flex flex-wrap gap-2">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={article.link}
            className="badge bg-light text-dark border"
            style={{ cursor: "pointer", fontSize: "12px" }}
          >
            #{article.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
