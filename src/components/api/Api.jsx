import { apikey } from "./key.json";
import React, { useState } from "react";
import "../design.css";

const Api = () => {
  const urlBase = "https://api.unsplash.com/search/photos?page=1";
  const [im, setIm] = useState(null);
  const [loading, setLoading] = useState(true);

  const getImage = async (e) => {
    const fe = await fetch(
      urlBase + "&query=" + e.target.value + "&client_id=" + apikey
    );
    const { results } = await fe.json();
    setIm(results);
    setLoading(false);
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
      {loading ? (
        <div className="spinner-grow text-primary rot" role="status">
          <span className="visually-hidden"></span>
        </div>
      ) : null}

      {im ? (
        <div className="cont">
          {im.map(({ urls }) => {
            return <img key={urls.regular} src={urls.regular} alt="" />;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Api;
