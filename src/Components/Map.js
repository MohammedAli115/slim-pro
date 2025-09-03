import React, { memo } from "react";
import { Helmet } from "react-helmet-async";

const faqData = [
  {
    id: "One",
    question: "هل زراعة الأسنان مؤلمة؟",
    answer:
      "زراعة الأسنان تُجرى تحت التخدير الموضعي ولا تسبب ألمًا أثناء الإجراء. بعد العملية، قد يشعر المريض بانزعاج بسيط يزول خلال أيام باستخدام مسكنات خفيفة.",
  },
  {
    id: "Two",
    question: "كم من الوقت تستغرق زراعة السن؟",
    answer:
      "الزراعة التقليدية تستغرق من 3 إلى 6 أشهر حتى يلتئم العظم حول الغرسة. أما الزراعة الفورية فقد يتم فيها تركيب التاج في نفس اليوم أو خلال فترة قصيرة.",
  },
  {
    id: "Three",
    question: "هل القشور الخزفية تضر الأسنان الطبيعية؟",
    answer:
      "عند تنفيذها بشكل احترافي، يتم إزالة طبقة سطحية جدًا من السن أو أحيانًا تُركب دون برد، ولا تسبب ضررًا للسن.",
  },
  {
    id: "Four",
    question: "هل يمكن تركيب الزرعة في حال كان العظم ضعيفًا؟",
    answer:
      "نعم، في حالات فقدان العظم يمكننا إجراء زراعة عظم أو رفع الجيوب الأنفية لتهيئة الفك للزراعة.",
  },
  {
    id: "Five",
    question: "ما الفرق بين التبييض والقشور الخزفية؟",
    answer:
      "التبييض يُحسّن لون الأسنان الطبيعية، أما القشور فتعالج اللون، الشكل، والطول وتُستخدم لتحسين الابتسامة بشكل شامل.",
  },
  {
    id: "Six",
    question: "هل تقدمون خطط تقسيط للدفع؟",
    answer:
      "نعم، نوفر خطط دفع مرنة في بعض الحالات، لتسهيل الحصول على العلاج دون ضغوط مالية.",
  },
];

function GoogleMap() {
  return (
    <>
      {/* Helmet SEO tags */}
      <Helmet>
        <title>الأسئلة الشائعة | عيادات سليم سمايل</title>
        <meta
          name="description"
          content="تعرف على الأسئلة الأكثر شيوعًا حول زراعة الأسنان، التبييض، القشور الخزفية، وخطط الدفع في عيادات سليم سمايل."
        />
        <meta
          name="keywords"
          content="سليم سمايل, زراعة الأسنان, تبييض الأسنان, قشور خزفية, FAQ"
        />
        <meta
          property="og:title"
          content="الأسئلة الشائعة | عيادات سليم سمايل"
        />
        <meta
          property="og:description"
          content="أجوبة عن أهم الأسئلة التي يطرحها المرضى في عيادات سليم سمايل بخصوص زراعة وتجميل الأسنان."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="border-top border-2">
        <div className="my-5 container">
          <div className="row">
            {/* FAQ Section */}
            <div className="col-lg-6 col-md-12">
              <h2 className="text-center my-4">الأسئلة الشائعة (FAQ)</h2>
              <div className="accordion bg-light rounded" id="accordionExample">
                {faqData.map((item, index) => (
                  <div className="accordion-item border-bottom" key={index}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${item.id}`}
                      >
                        <div className="d-flex justify-content-between align-items-center w-100 text-end">
                          <span>{item.question}</span>
                          <span>
                            <i className="bi bi-plus-lg"></i>
                          </span>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Section */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h2 className="text-center my-4">موقعنا على الخريطة</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3386.788549917203!2d35.203975675627376!3d31.91234207403698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU0JzQ0LjQiTiAzNcKwMTInMjMuNiJF!5e0!3m2!1sen!2seg!4v1756872337700!5m2!1sen!2seg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع عيادات سليم سمايل"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(GoogleMap);
