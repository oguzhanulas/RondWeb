import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            ROND ANALYTICS
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Veri Görselleştirme
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Hizmetlerimiz
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeri
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
              Yorumlarımız
              </a>
            </li>
           <li>
              <a href="#team" className="page-scroll">
                Takım
              </a>
  </li> */}
            <li> 
              <a href="#contact" className="page-scroll">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
