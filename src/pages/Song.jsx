import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Song = () => {
  const navigate = useNavigate();

  // const [actualPositionSound, setActualPositionSound] = useState("");
  // const [completeSound, setCompleteSound] = useState();

  const [play, setPlay] = useState(false);

  // useEffect(() => {
  //   setCompleteSound(document.getElementById("audio").duration);
  //   prueba();
  //   console.log(actualPositionSound);
  // }, [actualPositionSound, completeSound]);

  // const prueba = () => {
  //   setActualPositionSound(document.getElementById("audio").currentTime);
  // };

  return (
    <div className="song">
      <div className="song_container">
        <div className="containerAll">
          <div className="content_steps">
            <div className="content_circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <p>PASO 3</p>
          </div>
          <h1>
            ¡Listos! &nbsp;
            <span>
              Tu canción personalizada está lista. Óyela y no olvides
              descargarla.
            </span>
          </h1>
          <audio id="audio" src="/Assets/Audio/1.mp3"></audio>
          <div className="content_audio">
            <div className="content">
              {!play ? (
                <img
                  onClick={() => {
                    document.getElementById("audio").play();
                    setPlay(!play);
                  }}
                  src="/Assets/play.png"
                  alt=""
                />
              ) : (
                <img
                  onClick={() => {
                    document.getElementById("audio").pause();
                    setPlay(!play);
                  }}
                  src="/Assets/pausa.png"
                  alt=""
                />
              )}
            </div>

            {/* <progress id="file" max={x} value={x}>
              {" "}
              70%{" "}
            </progress> */}
          </div>

          <div className="content_buttons">
            <div className="content_a">
              <a href="/Assets/Audio/1.mp3" download>
                Descargar
              </a>
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
