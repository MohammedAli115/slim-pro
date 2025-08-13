// import logo from "../images/logo-removebg-preview.png";

// import { HashLink } from "react-router-hash-link";

// function Navbar() {
//   return (
//     <div dir="rtl">
//       <nav
//         className="navbar navbar-expand-lg navbar-light fixed-top py-0"
//         style={{
//           background: "rgba(255, 255, 255, 0.82)",
//           backdropFilter: "blur(10px) saturate(120%)",
//           WebkitBackdropFilter: "blur(10px) saturate(120%)",
//           border: "1px solid rgba(255, 255, 255, 0.2)",
//           boxShadow: "0 6px 24px rgba(16,24,40,0.08)",
//         }}
//       >
//         <div className="container d-flex flex-row-reverse align-items-center justify-content-between">
//           <HashLink smooth className="navbar-brand" to="/#home">
//             <img src={logo} alt="Logo" width="50" height="50" />
//           </HashLink>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link active fs-5"
//                   to="/#home"
//                   style={{ color: "#0078d7" }}
//                 >
//                   الرئيسيه
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="/#about"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   من نحن
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="/#services"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   الخدمات
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="/#team"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   الطاقم
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="#activities"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   الأنشطة
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="/#d"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   أراء مراجعينا
//                 </HashLink>
//               </li>
//               <li className="nav-item">
//                 <HashLink
//                   smooth
//                   className="nav-link fs-5"
//                   to="/#contact"
//                   style={{ color: "#00ACE7" }}
//                 >
//                   اتصل بنا
//                 </HashLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import logo from "../images/logo-removebg-preview.png";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div dir="rtl">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-0"
        style={{
          background: "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(10px) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) saturate(120%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 6px 24px rgba(16,24,40,0.08)",
        }}
      >
        <div className="container d-flex flex-row-reverse align-items-center justify-content-between">
          <HashLink smooth className="navbar-brand" to="/#home">
            <img src={logo} alt="Logo" width="50" height="50" />
          </HashLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link active fs-5"
                  to="/#home"
                  style={{ color: "#0078d7" }}
                >
                  الرئيسيه
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="/#about"
                  style={{ color: "#00ACE7" }}
                >
                  من نحن
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="/#services"
                  style={{ color: "#00ACE7" }}
                >
                  الخدمات
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="/#team"
                  style={{ color: "#00ACE7" }}
                >
                  الطاقم
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="#activities"
                  style={{ color: "#00ACE7" }}
                >
                  الأنشطة
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="/#d"
                  style={{ color: "#00ACE7" }}
                >
                  أراء مراجعينا
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className="nav-link fs-5"
                  to="/#contact"
                  style={{ color: "#00ACE7" }}
                >
                  اتصل بنا
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
