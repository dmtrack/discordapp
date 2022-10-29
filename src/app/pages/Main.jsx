import { Preloader } from "../components/Preloader";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
function Main() {
  const [servers, setServers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const requestServerCards = () => {
    try {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=saul`)
        .then((responce) => responce.json())
        .then((data) => {
          setIsLoading(true);
          setServers(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="main-content">Servers1</div>
        // <main className="container content">
        //   <ServerList servers={servers} />
        // </main>
      )}
    </>
  );
}

export { Main };
