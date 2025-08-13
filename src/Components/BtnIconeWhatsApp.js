function BtnIconeWhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/972599599591"
        target="_blank"
        rel="noreferrer"
        className="btn position-fixed bottom-0 start-0 m-3 whatsapp show border-0 slide-down"
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

export default BtnIconeWhatsApp;
