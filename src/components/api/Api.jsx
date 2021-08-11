import { apikey } from "./key.json";
import React, { useEffect, useState } from "react";
import "../design.css";
import { render } from "@testing-library/react";

const Api = () => {
  const urlBase = "https://api.unsplash.com/search/photos?page=1";
  const [im, setIm] = useState("");
  const getImage = (e) => {
    fetch(urlBase + "&query=" + e.target.value + "&client_id=" + apikey)
      .then((response) => response.json())
      .then(({ results, total }) => {
        for (let j = 0; j < results.length; j++) {
          if (e.target.value !== "") {
            setIm(results[j].urls.small);
            e.target.value = "";
          }
          
        }
        if (total === 0) {
          setIm("https://raw.githubusercontent.com/fidalgodev/movie-library-react/8a1626814f5368a9c311128be857bbc64cf06d55/src/svg/empty.svg");
        }
      });
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
      </div>
    </>
  );
};

export default Api;
