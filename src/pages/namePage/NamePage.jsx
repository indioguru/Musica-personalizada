import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import nombres from "./names.json";

const NamePage = () => {
  const navigate = useNavigate();
  const [isInputShow, setIsInputShow] = useState(false);
  const [allNames, setAllNames] = useState([]);
  const [search, setSearch] = useState("");
  const [usersFilter, setUsersFilter] = useState([]);
  const [allowedContinue, setAllowedContinue] = useState(true);
  useEffect(() => {
    setAllNames(nombres.nombre);
    setUsersFilter(nombres.nombre);
  }, []);

  const checkName = () => {
    let valueSearch = search.toString().toLowerCase();
    for (let i = 0; i < allNames.length; i++) {
      if (allNames[i].nombre.toString().toLowerCase() === valueSearch) {
        setAllowedContinue(true);
        navigate("/aboutYou");
        break;
      } else {
        setAllowedContinue(false);
        setSearch("");
        setUsersFilter(allNames);
      }
    }
  };

  const filtrer = (searchTerm) => {
    let resultSearch = allNames.filter((element) => {
      if (
        element.nombre
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return element;
      } else {
        return null;
      }
    });
    setUsersFilter(resultSearch);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrer(e.target.value);
  };

  const getIds = (id) => {
    const found = allNames.find((e) => e.id === id);
    setIsInputShow(false);
    filtrer(found.name);
  };
  return (
    <div className="namePage">
      <div className="namePage_container containerAll">
        {allowedContinue ? (
          <div className="content_header">
            <h1>¿A quien quieres que le dediquemos la canción?</h1>
            <p>Escribe su nombre.</p>
          </div>
        ) : (
          <div className="content_header_error">
            <div className="content_img">
              <img src="/Assets/error.png" alt="" />
            </div>
            <p>Lo sentimos, ese nombre no esta disponible.</p>
            <p>Te recomendamos Seleccionar una de las siguientes opciones.</p>
          </div>
        )}

        <div className="content_flex">
          <div className="input">
            <input
              value={search}
              onChange={handleChange}
              type="text"
              onClick={() => setIsInputShow(true)}
            />
            <div
              className="listNames"
              style={{ display: isInputShow ? "block" : "none" }}
            >
              {usersFilter.map((item, i) =>
                i < 4 ? (
                  <p
                    onClick={() => {
                      setSearch(item.nombre);
                      getIds(item.id);
                    }}
                    key={item.id}
                  >
                    {item.nombre}
                  </p>
                ) : null
              )}
            </div>
          </div>

          <div className="button_one">
            <button onClick={() => checkName()}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePage;