// import { HashLink } from "react-router-hash-link";
// import logo from "../images/logo-removebg-preview.png";

// function Footer() {
//   return (
//     <div className="bg-dark text-light" id="footer">
//       <div className="container py-4">
//         <div className="row text-center">
//           {/* العمود الثالث - العنوان */}
//           <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
//             <a
//               href="https://maps.app.goo.gl/2tS5e1Ub7kmmv6ia9"
//               className="text-light text-decoration-none"
//             >
//               فلسطين - رام الله - شارع الارسال - مقابل المقاطعة - عمارة قطن - ط4
//             </a>
//           </div>
//           {/* العمود الثاني - أيقونات السوشيال ميديا */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center align-items-center flex-wrap">
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.facebook.com/share/1GFaC9x9Np/?mibextid=wwXIfr"
//               className="mx-2"
//             >
//               <i className="fa-brands fa-facebook fs-1 text-light"></i>
//             </a>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.tiktok.com"
//               className="mx-2"
//             >
//               <i className="fa-brands fa-tiktok fs-1 text-light"></i>
//             </a>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.instagram.com/saleem.smile23/?utm_source=ig_web_button_share_sheet"
//               className="mx-2"
//             >
//               <i className="fa-brands fa-instagram fs-1 text-danger"></i>
//             </a>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://youtube.com/@saleemsmile?si=9AGAT9KM4TMImcAi"
//               className="mx-2"
//             >
//               <i className="fa-brands fa-youtube fs-1 text-danger"></i>
//             </a>
//             <i className="fa-solid fa-phone mx-2 fs-1 text-light"></i>
//           </div>

//           {/* LOGO */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex flex-column align-items-end">
//             <a href="#home">
//               <img src={logo} alt="Logo" width="50" height="50" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* الجزء السفلي */}
//       <div className="text-center py-3" style={{ borderTop: "1px solid #ccc" }}>
//         <p className="mb-0">
//           جميع الحقوق محفوظة لدي{" "}
//           <HashLink
//             to="#home"
//             className="text-decoration-none"
//             style={{ color: "#00ACE7" }}
//           >
//             سليم سمايل
//           </HashLink>{" "}
//           © 2025
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import { HashLink } from "react-router-hash-link";
import logo from "../images/logo-removebg-preview.png";
import "./Footer.css"; // هنعمل ملف CSS منفصل للتأثيرات

function Footer() {
  return (
    <div className="bg-dark text-light" id="footer">
      <div className="container py-4">
        <div className="row text-center align-items-center">
          {/* العمود الأول - العنوان */}
          <div className="col-lg-4 col-md-12 mb-3">
            <a
              href="https://maps.app.goo.gl/2tS5e1Ub7kmmv6ia9"
              className="text-light text-decoration-none footer-link"
            >
              فلسطين - رام الله - شارع الارسال - مقابل المقاطعة - عمارة قطن - ط4
            </a>
          </div>

          {/* العمود الثاني - أيقونات السوشيال ميديا */}
          <div className="col-lg-4 col-md-6 mb-3 d-flex justify-content-center align-items-center flex-wrap gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/share/1GFaC9x9Np/?mibextid=wwXIfr"
              className="footer-icon facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com"
              className="footer-icon tiktok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/saleem.smile23/?utm_source=ig_web_button_share_sheet"
              className="footer-icon instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/@saleemsmile?si=9AGAT9KM4TMImcAi"
              className="footer-icon youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:+97000000000" className="footer-icon phone">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>

          {/* العمود الثالث - اللوجو */}
          <div className="col-lg-4 col-md-6 mb-3 text-lg-start">
            <a href="#home" className="logo-link">
              <img
                src={logo}
                alt="Logo"
                width="50"
                height="50"
                className="footer-logo"
              />
            </a>
          </div>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className="text-center py-3 border-top border-secondary">
        <p className="mb-0">
          جميع الحقوق محفوظة لدي{" "}
          <HashLink
            to="#home"
            className="text-decoration-none"
            style={{ color: "#00ACE7" }}
          >
            سليم سمايل
          </HashLink>{" "}
          © 2025
        </p>
      </div>
    </div>
  );
}

export default Footer;
