import { Search } from "../pages/Search";
import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

function Members() {
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
  console.log(users);
  return (
    <>
      <div className="main-content">
        <h1>Members</h1>
        <div className="list-members">
          {users.map((u) => (
            <div className="member" key={u.id}>
              <img
                className="member-image"
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
      </div>
    </>
  );
}

export { Members };
