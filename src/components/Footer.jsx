import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container containerAll">
        <div className="content_icons">
          <div className="youtube">
            <img src="/assets/redesSociales/youtube.png" alt="" />
          </div>
          <div className="instagram">
            <img src="/assets/redesSociales/instagram.png" alt="" />
          </div>
          <div className="facebook">
            <img src="/assets/redesSociales/facebook.png" alt="" />
          </div>

          <div className="spotify">
            <img src="/assets/redesSociales/spotify.png" alt="" />
          </div>
        </div>

        <div className="content_policy">
          <a href="https://www.youtube.com/watch?v=Yabi_nCGXdo&ab_channel=Yanah">
            Políticas de privacidad
          </a>
        </div>

        <div className="content_rights">
          <p>© 2023 FM Entretenimiento </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
