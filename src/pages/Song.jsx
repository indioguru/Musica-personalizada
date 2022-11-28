import React from "react";
import { useNavigate } from "react-router-dom";

const Song = () => {
  const navigate = useNavigate();
  return (
    <div className="song">
      <div className="song_container">
        <div className="containerAll">
          <h1>
            ¡Listos! &nbsp;
            <span>
              Tu canción personalizada esta lista. Oyela y no olvides
              descargarla.
            </span>
          </h1>

          <div className="content_img">
            <img src="/Assets/reproductor.png" alt="" />
          </div>

          <div className="content_buttons">
            <div className="button_one">
              <button>Descargar</button>
            </div>

            <div className="button_two">
              <button onClick={() => navigate("/")}>Volver a empezar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
