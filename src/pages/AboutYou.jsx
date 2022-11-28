import React from "react";
import { useNavigate } from "react-router-dom";

const AboutYou = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutYou">
      <div className="aboutYou_container ">
        <div className="containerAll">
          <h1>Cuéntanos un poco sobre ti</h1>
          <div className="content_forms">
            <div className="contetn_flex_one">
              <div className="input">
                <label for="name">Tu nombre</label>
                <input type="text" id="name" />
              </div>
              <div className="input">
                <label for="apellido">Tu apellido</label>
                <input type="text" id="apellido" />
              </div>
              <div className="input">
                <label for="email">Tu email</label>
                <input type="email" id="email" />
              </div>
            </div>

            <div className="content_flex_two">
              <div className="input">
                <label for="celular">Tu telefono mobil</label>
                <input type="text" id="celular" />
              </div>

              <div className="content_dropdown">
                <p className="label">¿Cual es tu parentesco con nombre?</p>
                <div className="img">
                  <img src="/Assets/abajo.png" alt="" />
                </div>
                <p className="info-dropdown">Selecciona tu parentesco</p>
              </div>

              <div className="button_one">
                <button onClick={() => navigate("/song")}>enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
