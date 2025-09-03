import React from "react";
import { Helmet } from "react-helmet-async";
import RelatedArticles from "../../Components/RelatedArticles";

const OralHealthAndHeart = () => {
  return (
    <>
      <Helmet>
        <title>
          صحة الفم والأسنان وأمراض القلب: العلاقة والتأثير المتبادل – سليم سمايل
          رام الله
        </title>
        <meta
          name="description"
          content="مقال علمي يوضح العلاقة بين صحة الفم والأسنان وأمراض القلب، وكيف يمكن أن تؤثر أمراض اللثة والتسوس على صحة القلب والشرايين مع أحدث الأبحاث."
        />
        <meta
          name="keywords"
          content="صحة الفم, أمراض اللثة, أمراض القلب, صحة الأسنان, تسوس الأسنان, التهاب اللثة, سليم سمايل رام الله"
        />

        {/* OG Tags for Social Media */}
        <meta
          property="og:title"
          content="صحة الفم والأسنان وأمراض القلب: العلاقة والتأثير المتبادل"
        />
        <meta
          property="og:description"
          content="تعرف على كيف يمكن أن تؤثر التهابات اللثة وتسوس الأسنان على صحة القلب والشرايين، وفق أحدث الأبحاث العلمية."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/800x450.png?text=Oral+Health+and+Heart"
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
                name: "هل تؤثر أمراض اللثة على صحة القلب؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، الأبحاث تشير إلى أن التهابات اللثة المزمنة قد ترفع من خطر الإصابة بأمراض القلب والشرايين بسبب الالتهاب المزمن وانتقال البكتيريا للدم.",
                },
              },
              {
                "@type": "Question",
                name: "كيف تنتقل بكتيريا الفم إلى القلب؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "في حال وجود التهاب في اللثة، يمكن أن تدخل بكتيريا مثل Porphyromonas gingivalis إلى مجرى الدم وتساهم في تكوين لويحات تصلب الشرايين.",
                },
              },
              {
                "@type": "Question",
                name: "هل علاج اللثة يقلل من خطر أمراض القلب؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم، الدراسات أثبتت أن علاج أمراض اللثة يقلل من مؤشرات الالتهاب ويحسن وظيفة الأوعية الدموية.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <article className="container my-5 pt-5">
        <h1 className="fw-bold text-center mb-4" 
        style={{color: "#00b3ff"}}>
          صحة الفم والأسنان وأمراض القلب
        </h1>
        <h5 className="text-center"> العلاقة والتأثير المتبادل</h5>
        <p className="text-center text-muted mb-5">
          بقلم: د. سعدالله سليم عمرو – مركز سليم سمايل، رام الله
        </p>

        <section>
          <h2>المقدمة</h2>
          <p>
            لطالما اعتُبرت صحة الفم مجالًا منفصلًا عن الصحة العامة، لكن خلال
            العقود الأخيرة بدأت الأبحاث تكشف أن الفم ليس مجرد مدخل للطعام
            والكلام، بل هو “مرآة” لصحة الجسم ككل. تظهر الأدلة اليوم أن التهابات
            اللثة المزمنة وتسوس الأسنان قد تكون أكثر من مجرد مشكلة موضعية؛ فهي
            ترتبط بشكل وثيق بأمراض جهازية خطيرة، وعلى رأسها أمراض القلب
            والشرايين.
          </p>
        </section>

        <section>
          <h2>الخلفية العلمية</h2>
          <ul>
            <li>
              <strong>أمراض اللثة:</strong> التهاب مزمن يصيب اللثة والعظم الداعم
              للأسنان نتيجة تراكم البكتيريا.
            </li>
            <li>
              <strong>أمراض القلب والشرايين:</strong> تشمل تصلب الشرايين،
              الجلطات، السكتات الدماغية.
            </li>
            <li>
              <strong>القاسم المشترك:</strong> الالتهاب المزمن الذي يسرّع تلف
              الأوعية الدموية.
            </li>
          </ul>
        </section>

        <section>
          <h2>الآليات المحتملة للارتباط بين أمراض الفم والقلب</h2>
          <ol>
            <li>
              <strong>انتقال البكتيريا إلى الدم:</strong> عند وجود التهاب في
              اللثة، يمكن أن تدخل بكتيريا خطيرة مجرى الدم وتصل إلى الشرايين.
            </li>
            <li>
              <strong>الاستجابة الالتهابية:</strong> الالتهاب المزمن يرفع
              السيتوكينات والبروتينات الالتهابية مما يزيد خطر تصلب الشرايين.
            </li>
            <li>
              <strong>عوامل خطورة مشتركة:</strong> مثل التدخين، السكري والسمنة.
            </li>
          </ol>
        </section>

        <section>
          <h2>الأدلة السريرية والبحثية</h2>
          <ul>
            <li>
              دراسة Harvard 2012: أمراض اللثة المتقدمة تزيد خطر أمراض القلب
              بنسبة 64%.
            </li>
            <li>
              دراسة Circulation 2012: علاج أمراض اللثة يقلل الالتهاب ويحسن صحة
              الأوعية.
            </li>
            <li>تقارير ADA وAHA: تؤكد وجود ارتباط قوي يتطلب تعاون الأطباء.</li>
          </ul>
        </section>

        <section>
          <h2>الاستراتيجيات العلاجية والوقائية</h2>
          <ul>
            <li>تفريش الأسنان مرتين يوميًا بخيط ومعجون يحتوي على الفلورايد.</li>
            <li>تنظيف الأسنان بالخيط أو الأدوات المساعدة لإزالة البلاك.</li>
            <li>علاج التهابات اللثة بشكل مبكر وإجراء تنظيف دوري.</li>
            <li>التعاون بين أطباء الأسنان وأطباء القلب لمتابعة المرضى.</li>
          </ul>
        </section>

        <section>
          <h2>المناقشة</h2>
          <p>
            تراكم الأدلة يؤكد أن صحة الفم ليست رفاهية بل ضرورة لحماية القلب.
            معالجة أمراض اللثة لا تحسن فقط الابتسامة وجودة الحياة، بل قد تكون
            عنصرًا وقائيًا من أمراض قلبية خطيرة.
          </p>
        </section>

        <section>
          <h2>الخاتمة</h2>
          <p>
            يمكن القول إن الفم والقلب مرتبطان أكثر مما نتخيل. إن إهمال صحة الفم
            قد يفتح الباب أمام أمراض قلبية وعائية تهدد الحياة. لذلك، لا بد من
            نشر الوعي بأهمية صحة الفم ليس فقط من أجل الأسنان، بل من أجل صحة
            الجسد ككل.
          </p>
        </section>

        <section>
          <h2>المراجع</h2>
          <ol>
            <li>
              Tonetti MS, Van Dyke TE. “Periodontitis and atherosclerotic
              cardiovascular disease: consensus report.” J Clin Periodontol.
              2013.
            </li>
            <li>
              Lockhart PB, et al. “Periodontal disease and atherosclerotic
              vascular disease: Does the evidence support an independent
              association?” Circulation. 2012.
            </li>
            <li>
              Harvard School of Public Health. “Gum disease and heart disease
              link.” (2012).
            </li>
            <li>
              American Heart Association & American Dental Association Joint
              Statement (2012).
            </li>
          </ol>
        </section>
      </article>
      <RelatedArticles />
    </>
  );
};

export default OralHealthAndHeart;
