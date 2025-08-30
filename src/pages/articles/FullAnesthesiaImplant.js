import React from "react";
import { HashLink } from "react-router-hash-link";
// import { Helmet } from "react-helmet-async";

const FullAnesthesiaImplant = () => {
  return (
    <div className="container py-5 mt-5">
      {/* Uncomment Helmet block if react-helmet-async is installed */}
      {/* 
      <Helmet>
        <title>زراعة الأسنان بالتخدير الكامل | مركز سليم سمايل – رام الله</title>
        <meta
          name="description"
          content="نوفر خدمة زراعة الأسنان تحت التخدير الكامل لراحة وأمان المريض، بالتعاون مع نخبة من المستشفيات الفلسطينية المجهزة بأحدث التقنيات الطبية."
        />
        <meta
          name="keywords"
          content="زراعة الأسنان, تخدير كامل, مركز سليم سمايل, رام الله, ابتسامة, أسنان, مستشفيات"
        />
      </Helmet>
      */}

      <h1 className="mb-4 text-center" 
      style={{ color: "#00b3ff" }}>زراعة الأسنان بالتخدير الكامل</h1>
      <h5 className="text-center mb-5">راحة وأمان أثناء زراعة الأسنان</h5>
      <p className="text-center">
        مركز سليم سمايل – رام الله | ابتسامة متكاملة تبدأ من هنا
      </p>
      <p className="text-center text-muted">
        نوفر خدمة زراعة الأسنان تحت التخدير الكامل لراحة وأمان المريض، بالتعاون
        مع نخبة من المستشفيات الفلسطينية المجهزة بأحدث التقنيات الطبية.
      </p>

      <h2 className="mt-4">من يناسبهم التخدير الكامل؟</h2>
      <ul>
        <li>المرضى الذين يعانون من قلق شديد أو توتر أثناء العلاج.</li>
        <li>المرضى ذوي حساسية مفرطة للألم.</li>
        <li>الذين يحتاجون لزراعة عدة أسنان دفعة واحدة.</li>
      </ul>

      <h2 className="mt-4">مزايا التخدير الكامل</h2>
      <ul>
        <li>راحة تامة أثناء العملية.</li>
        <li>وقت أقل لإجراء زراعة الأسنان.</li>
        <li>بيئة آمنة مجهزة بأحدث المعدات الطبية.</li>
      </ul>

      <h2 className="mt-4">التعاون مع المستشفيات</h2>
      <p>
        يتم إجراء العملية في مستشفيات معتمدة ومجهزة بأحدث المعدات لضمان أعلى
        درجات الأمان والراحة للمريض.
      </p>

      <h2 className="mt-4">خطوات زراعة الأسنان بالتخدير الكامل</h2>
      <ol>
        <li>الفحص المبدئي وتقييم حالة الفم والأسنان.</li>
        <li>التنسيق مع المستشفى لتحديد موعد العملية.</li>
        <li>إجراء الزراعة تحت التخدير الكامل.</li>
        <li>المتابعة بعد العملية لضمان شفاء ناجح واستقرار الأسنان.</li>
      </ol>

      <h2 className="mt-4">لماذا تختار مركز سليم سمايل؟</h2>
      <ul>
        <li>خبرة عالية في زراعة الأسنان تحت التخدير الكامل.</li>
        <li>التعاون مع مستشفيات مجهزة بالكامل.</li>
        <li>متابعة شخصية لكل مريض لضمان النتائج المثالية.</li>
      </ul>

      <footer className="mt-4">
        <HashLink to="/#services" className="btn btn-outline-secondary">
          العودة للخدمات
        </HashLink>
      </footer>
    </div>
  );
};

export default FullAnesthesiaImplant;
