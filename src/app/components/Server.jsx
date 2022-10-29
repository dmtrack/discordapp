import { Search } from "../pages/Search";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Preloader } from "./Preloader";
const API_KEY = process.env.REACT_APP_API_KEY;

function Server() {
  let [title, setTitle] = useState("hackers");

  let { name } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const requestData = () => {
    try {
      setIsLoading(true);
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`)
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
  }, []);

  // if (data) {
  //   switch (name) {
  //     case "Steam server":
  //       setTitle("saul");
  //       break;
  //     case "Snapchat server":
  //       setTitle("batman");
  //       break;
  //     case "Github server":
  //       setTitle("terminator");
  //       break;
  //     case "Reddit server":
  //       setTitle("kazakh");
  //       break;
  //     case "Behance server":
  //       setTitle("america");
  //       break;
  //     default:
  //       setTitle("hackers");
  //   }
  // }

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
          </div>
          <div className="text-area">
            {data.map((e) => (
              <div className="text-message" key={e.imdbID}>
                <p style={{ margin: "5px 5px" }}>Type: {e.Type}</p>
                <p style={{ margin: "5px 5px" }}>Title: {e.Title}</p>
                <p style={{ margin: "5px 5px" }}>Year: {e.Year}</p>
                {/*<img*/}
                {/*  className="activator"*/}
                {/*  src={`https://via.placeholder.com/300x400?text=${title}`}*/}
                {/*  alt="poster"*/}
                {/*/>*/}
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
