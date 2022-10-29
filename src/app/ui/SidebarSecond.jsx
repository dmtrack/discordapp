import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import { Preloader } from "../components/Preloader";
import React from "react";

function SidebarSecond(name) {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    try {
      setUserLoading(true);
      fetch(API_URL, { headers: { Authorization: API_KEY } })
        .then((responce) => responce.json())
        .then((data) => {
          setUsers(data.featured);
          setUserLoading(false);
        });
    } catch (error) {
      console.error(error);
      setUserLoading(false);
    }
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            height: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4> Direct messages</h4>
        </div>
        <div
          style={{
            height: "40px",
            borderBottom: "outset",
            borderWidth: "1px",
            borderColor: "darkgray",
            display: "flex",
            alignItems: "center",
          }}
        ></div>
      </div>
      {userLoading ? (
        <Preloader />
      ) : (
        <div className="list-users">
          {users.map((u) => (
            <div className="user" key={u.id}>
              <img
                className="user-image"
                src={`https://avatars.dicebear.com/api/avataaars/${(
                  Math.random() + 1
                )
                  .toString(36)
                  .substring(7)}.svg`}
                alt="poster"
                key={u.id}
              />
              <span style={{ verticalAlign: "middle" }}>
                {u.name.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export { SidebarSecond };
