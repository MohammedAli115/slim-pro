import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Contact() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [treatmentType, setTreatmentType] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Create references for required fields
    const nameRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const treatmentTypeRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any required fields are empty
        if (name === "" || phoneNumber === "" || treatmentType === "") {
            
            // Focus on the first empty required field
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
        const text = `الاسم: ${name}%0Aرقم الهاتف: ${phoneNumber}%0Aالإيميل: ${email || 'لا يوجد'}%0Aنوع العلاج: ${treatmentType}%0Aالرسالة: ${message || treatmentType}`;
        const url = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(url, "_blank");
    };

    return (
        
        <motion.div
            className='container py-5'
            id='contact'
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="head text-center">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="mb-2 fs-1 fw-bolder"> تواصل معنا</h2>
                    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "140px", marginTop: "-30px" }}>
                        <path d="M10,40 Q50,90 190,30" stroke="#00b3ff" strokeWidth="8" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            {error && <p className='text-danger'>{error}</p>} {/* Display error message if any */}
            <div className="row mt-5">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label ms-2">الإسم</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="name"
                            placeholder="اسم المستخدم"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={nameRef} // Assign ref to the input field
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label ms-2">رقم الهاتف</label>
                        <input
                            type="number"
                            className="form-control"
                            required
                            id="phoneNumber"
                            placeholder="رقم الهاتف"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            ref={phoneNumberRef} // Assign ref to the input field
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="treatmentType" className="form-label ms-2">نوع العلاج</label>
                        <select
                            className="form-select"
                            required
                            aria-label="نوع العلاج"
                            value={treatmentType}
                            onChange={(e) => setTreatmentType(e.target.value)}
                            id='treatmentType'
                            ref={treatmentTypeRef} // Assign ref to the select field
                        >
                            <option value="حشو الأسنان">حشو الأسنان</option>
                            <option value="تنظيف الأسنان">تنظيف الأسنان</option>
                            <option value="تقويم الأسنان">تقويم الأسنان</option>
                            <option value="تبييض الأسنان">تبييض الأسنان</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label ms-2">الإيميل</label>
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
                        <label htmlFor="message" className="form-label ms-2">الرسالة</label>
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
                    إرسال عبر واتساب<i className="fa-brands fa-whatsapp me-2 text-success"></i>
                </button>
            </div>
        </motion.div>
    );
}

export default Contact;
