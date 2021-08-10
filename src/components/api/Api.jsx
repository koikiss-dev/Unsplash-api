import { apikey } from "./key.json";
import React, { useState } from "react";
import "../design.css";

const Api = () => {
  const urlBase = "https://api.unsplash.com/search/photos?page=1";
  const [im, setIm] = useState("");
  const getImage = (e) => {
    fetch(urlBase + "&query=" + e.target.value + "&client_id=" + apikey)
      .then((response) => response.json())
      .then(({ results }) => {
        for (let j = 0; j < results.length; j++) {
          if (e.target.value !== "") {
            setIm(results[j].urls.small);
            e.target.value = "";
          }
        }
      })
      .catch(
        setIm("https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif")
      );
  };

  return (
    <>
      <div className="container d-flex align-items-center input-group mb-3">
        <input
          onKeyPress={(event) =>
            event.key === "Enter" ? getImage(event) : null
          }
          type="text"
          className="form-control b"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="busca cualquier imagen..."
        />
      </div>
      <div className="cont d-flex flex-column align-items-center">
        <img className="pddin" src={im} alt="" />
        <span
          className={
            im === "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              ? "error_vi"
              : "error_in"
          }
        >
          La imagen no se encuantra
        </span>
      </div>
    </>
  );
};

export default Api;
