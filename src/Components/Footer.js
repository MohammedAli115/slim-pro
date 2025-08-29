// import { HashLink } from "react-router-hash-link";
// import logo from "../images/logo-removebg-preview.png";

// function Footer() {
//   return (
//     <footer
//       className="text-light"
//       id="footer"
//       style={{ backgroundColor: "#202020c8" }}
//     >
//       <div className="container py-4">
//         <div className="row text-center align-items-center">
//           {/* Column 1 - Address */}
//           <div className="col-lg-4 col-md-12 mb-3">
//             <a
//               href="https://maps.app.goo.gl/2tS5e1Ub7kmmv6ia9"
//               className="text-light text-decoration-none footer-link"
//             >
//               Palestine - Ramallah - Al-Irsal Street - Opposite Al-Muqata’a -
//               Qatan Building - 4th Floor
//             </a>
//           </div>

//           {/* Column 2 - Social Media Icons */}
// <div className="col-lg-4 col-md-6 col-8 mb-3 d-flex justify-content-center align-items-center flex-wrap gap-3">
//   {/* Facebook */}
//   <a
//     target="_blank"
//     rel="noreferrer"
//     href="https://www.facebook.com/share/1GFaC9x9Np/?mibextid=wwXIfr"
//     className="footer-icon facebook"
//     style={{ color: "#006effff" }}
//   >
//     <i className="fa-brands fa-facebook"></i>
//   </a>
//   {/* TikTok */}
//   <a
//     target="_blank"
//     rel="noreferrer"
//     href="https://www.tiktok.com"
//     className="footer-icon tiktok"
//     style={{ color: "#000000" }}
//   >
//     <i className="fa-brands fa-tiktok"></i>
//   </a>
//   {/* Instagram */}
//   <a
//     target="_blank"
//     rel="noreferrer"
//     href="https://www.instagram.com/saleem.smile23/?utm_source=ig_web_button_share_sheet"
//     className="footer-icon instagram"
//     style={{ color: "#d51717ff" }}
//   >
//     <i className="fa-brands fa-instagram"></i>
//   </a>
//   {/* YouTube */}
//   <a
//     target="_blank"
//     rel="noreferrer"
//     href="https://youtube.com/@saleemsmile?si=9AGAT9KM4TMImcAi"
//     className="footer-icon youtube"
//     style={{ color: "#FF0000" }}
//   >
//     <i className="fa-brands fa-youtube"></i>
//   </a>
//   {/* Phone */}
//   <a
//     href="tel:+97000000000"
//     className="footer-icon phone"
//     style={{ color: "#00ACE7" }}
//   >
//     <i className="fa-solid fa-phone"></i>
//   </a>
// </div>

//           {/* Column 3 - Logo */}
//           <div className="col-lg-4 col-md-6 col-4 mb-3 text-lg-start">
//             <HashLink smooth className="navbar-brand" to="/#home">
//               <img src={logo} alt="Logo" width="50" height="50" />
//             </HashLink>
//           </div>
//         </div>
//       </div>

//       {/* Bottom part */}
//       <div className="text-center py-3 border-top border-secondary">
//         <p className="mb-0">
//           All rights reserved to
//           <HashLink
//             to="#home"
//             className="text-decoration-none"
//             style={{ color: "#00ACE7" }}
//           >
//             Saleem Smile
//           </HashLink>
//           © 2025
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import { HashLink } from "react-router-hash-link";
import logo from "../images/logo-removebg-preview.png";

function Footer() {
  return (
    <footer
      className="text-light"
      id="footer"
      style={{ backgroundColor: "#202020c8" }}
    >
      <div className="container py-4">
        <div className="row text-center align-items-center">
          {/* Column 1 - Address */}
          <div className="col-lg-4 col-md-12 mb-3">
            <a
              href="https://maps.app.goo.gl/2tS5e1Ub7kmmv6ia9"
              className="text-light text-decoration-none footer-link"
            >
              فلسطين - رام الله - شارع الإرسال - مقابل المقاطعة - عمارة قطن -
              الطابق الرابع
            </a>
          </div>

          {/* Column 2 - Social Media Icons */}
          <div className="col-lg-4 col-md-6 col-8 mb-3 d-flex justify-content-center align-items-center flex-wrap gap-3">
            {/* Facebook */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/share/1GFaC9x9Np/?mibextid=wwXIfr"
              className="footer-icon facebook"
              style={{ color: "#006effff" }}
            >
              <i className="fa-brands fa-facebook fs-1"></i>
            </a>
            {/* TikTok */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com"
              className="footer-icon tiktok"
              style={{ color: "#000000" }}
            >
              <i className="fa-brands fa-tiktok fs-1"></i>
            </a>
            {/* Instagram */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/saleem.smile23/?utm_source=ig_web_button_share_sheet"
              className="footer-icon instagram"
              style={{ color: "#d51717ff" }}
            >
              <i className="fa-brands fa-instagram fs-1"></i>
            </a>
            {/* YouTube */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/@saleemsmile?si=9AGAT9KM4TMImcAi"
              className="footer-icon youtube"
              style={{ color: "#FF0000" }}
            >
              <i className="fa-brands fa-youtube fs-1"></i>
            </a>
            {/* Phone */}
            <a
              href="tel:+97000000000"
              className="footer-icon phone"
              style={{ color: "#00ACE7" }}
            >
              <i className="fa-solid fa-phone fs-1"></i>
            </a>
          </div>

          {/* Column 3 - Logo */}
          <div className="col-lg-4 col-md-6 col-4 mb-3 text-lg-start">
            <HashLink smooth className="navbar-brand" to="/#home">
              <img src={logo} alt="Logo" width="50" height="50" />
            </HashLink>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="text-center py-3 border-top border-secondary">
        <p className="mb-0">
          جميع الحقوق محفوظة لدى{" "}
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
    </footer>
  );
}

export default Footer;
