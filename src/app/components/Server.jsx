import { Search } from "../pages/Search";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Preloader } from "./Preloader";
const API_KEY = process.env.REACT_APP_API_KEY;

const serversPath = {
  "Hackers server": {
    name: "Hackers server",
    path: "hackers",
  },
  "Steam server": {
    name: "Steam server",
    path: "saul",
  },
  "Snapchat server": {
    name: "Snapchat server",
    path: "batman",
  },
  "Github server": {
    name: "Github server",
    path: "terminator",
  },
  "Reddit server": {
    name: "Reddit server",
    path: "kazakh",
  },
  "Behance server": {
    name: "Behance server",
    path: "america",
  },
};

function Server() {
  let { name } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPath = () => serversPath[name].path;
  const requestData = () => {
    try {
      setIsLoading(true);
      fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${getPath()}`
      )
        .then((responce) => responce.json())
        .then((data) => {
          setData(data.Search);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestData();
  }, [name]);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="main-content">
          <h1>Welcome to {name}</h1>
          <div style={{ gap: "3px", display: "flex", textAlign: "center" }}>
            <button className="button-small">edit</button>
            <button className="button-small">reload</button>
            <button className="button-small">contacts</button>
          </div>
          <div className="text-area">
            {data &&
              data.map((e) => (
                <div className="text-message" key={e.imdbID}>
                  <div>
                    <p style={{ margin: "5px 5px" }}>Type: {e.Type}</p>
                    <p style={{ margin: "5px 5px" }}>Title: {e.Title}</p>
                    <p style={{ margin: "5px 5px" }}>Year: {e.Year}</p>
                  </div>
                  <div>
                    <img
                      className="message-image"
                      src={`${e.Poster}`}
                      alt="poster"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div style={{ display: "flex" }}>
            <Search className="input-message" placeholder="Type here..." />
          </div>
        </div>
      )}
    </>
  );
}

export { Server };
