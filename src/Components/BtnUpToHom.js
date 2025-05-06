import React, { useEffect, useState } from 'react';
import '../BtnUpToHome.css';

function BtnUpToHome() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <a 
                href="#home" 
                className={`btn position-fixed bottom-0 start-0 m-3 scroll-btn whatsapp  ${showButton ? 'show slide-down' : 'd-none'}`} 
                style={{ zIndex: 100 }}
            >
                <div className="wave-container">
                    <i className="fa-brands fa-whatsapp text-success fs-1"></i>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                </div>
            </a>
        </div>
    );
}

export default BtnUpToHome;
