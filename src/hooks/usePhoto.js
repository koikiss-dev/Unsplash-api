import { apikey } from "./key.json";
import React, { useState } from "react";
export const usePhoto = () => {
  const urlBase = "https://api.unsplash.com/search/photos?page=1";
  const [im, setIm] = useState(null);
  const [loading, setLoading] = useState(false);

  const getImage = async (e) => {
    setLoading(true);
    const fe = await fetch(
      urlBase + "&query=" + e.target.value + "&client_id=" + apikey
    );
    const { results } = await fe.json();
    if (e.target.value !== "") {
      setIm(results);
      e.target.value = " ";
      setLoading(false);
    }
  };
  return [getImage, loading, im];
};
