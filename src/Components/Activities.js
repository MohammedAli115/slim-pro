

import React from 'react'

function Activities() {
    return (
        <div className='activities my- py-5' id='activities' style={{ borderBottom: "1px solid #ccc" }}>\
            <div className="container">
                <div className="head text-center mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="mb-2 fs-1 fw-bolder">الأنشطة</h2>
                        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "140px", marginTop: "-30px" }}>
                            <path d="M10,40 Q50,90 190,30" stroke="#00b3ff" strokeWidth="8" fill="none" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-6 col-md-12'>
                        <p style={{ letterSpacing: "1.5px", lineHeight : "30px" }}>تعليم الطلاب أسس العناية بالأسنان: شملت الزيارات محاضرات تفاعلية حول أهمية تنظيف الأسنان بانتظام، واستخدام الخيط الطبي، وكيفية تجنب الأطعمة التي تؤثر سلباً على صحة الأسنان.

                            إجابة على الأسئلة الشائعة: تم تخصيص جزء من الجلسات للإجابة على أسئلة الطلاب حول المشكلات الشائعة مثل التسوس، وأهمية الفحوصات الدورية للأسنان، وكيفية الوقاية من الأمراض المرتبطة بها.

                            أنشطة تفاعلية: تم تنظيم ورش عمل تفاعلية، حيث شارك الطلاب في مجموعة من الأنشطة المبدعة مثل كيفية العناية بالأسنان عبر الألعاب والتمارين التي تساعدهم في فهم الرسائل الصحية بشكل مبسط.

                            توزيع هدايا تحفيزية: تم توزيع فرش أسنان ومعجون مخصص للأطفال كهدية للطلاب، تشجيعاً لهم على اتباع العادات السليمة في العناية بأسنانهم.</p>
                    </div>
                    <div className='video col-lg-6 col-md-12'>
                        <video className='rounded' muted autoPlay loop controls  style={{ width: "100%", maxHeight : "400px", objectFit : "cover"}}>
                            <source src="/video/active-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
