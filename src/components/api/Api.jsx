import { apikey } from "./key.json";
import React, { useState } from "react";
import "../design.css";
import { usePhoto } from "../../hooks/usePhoto";

const Api = () => {
  const [getImage, loading, im,] = usePhoto()

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
