

import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div>
            <div className='container position-relative text-light py-3' style={{ backgroundColor: "#00ACE7" }}>
                <div className="head text-center">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="fs-1 text-ark"> سليم سمايل</h3>
                        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "140px", marginTop: "-30px" }}>
                            <path d="M10,40 Q50,90 190,30" stroke="#efefef" strokeWidth="8" fill="none" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <a href='https://maps.app.goo.gl/2tS5e1Ub7kmmv6ia9' className='text-light text-decoration-none d-block text-center'>
                    فلسطين - رام الله - شارع الارسال - مقابل المقاطعة - عمارة قطن - ط4
                </a>
            </div>
            <div className='bg-dark text-light' style={{ marginTop: "-50px" }}>
                <div className='container py-3 pt-5'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex text-center mt-3'>
                            <a href='dff'  className='text-decoration-none text-light fs-5' style={{height : "fit-content"}}>
                                سليم سمايل-saleem smile
                                <i className="fa-brands fa-facebook me-2 text-primary"></i>
                            </a>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12  d-flex text-center mt-3'>
                            <a href='dff'  className='text-decoration-none text-light fs-5' style={{height : "fit-content"}}>
                                saleem.smile23
                                <i className="fa-brands fa-instagram me-2 text-danger"></i>
                            </a>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12  d-flex text-center mt-3'>
                            <a href='dff'  className='text-decoration-none text-light fs-5' style={{height : "fit-content"}}>
                                saleemmclininc23@gmail.com
                                <i className="fa-solid fa-envelope me-2"></i>
                            </a>
                        </div>
                        <div className='d-flex text-start col-lg-2 col-md-6 col-sm-12 mt-3'>
                            <p>97257-959-9591+ <br /> 022950222</p>
                            <i className="fa-solid fa-phone mt-1 me-3"></i>
                        </div>
                    </div>
                </div>
                    <div className='text-center py-3' style={{borderTop : "1px solid #ccc"}}>
                        <p> جميع الحقوق محفوظة لدي
                            <HashLink to='#home' className='text-decoration-none' style={{color : "#00ACE7"}}> سليم سمايل </HashLink>
                            © 2025</p>
                    </div>
            </div>
        </div>
    );
}

export default Footer;
