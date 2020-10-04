import React, { useState } from "react";
import "./styles.css";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function App() {
  const [respository, setRespository] = useState("");
  const [userData, setUserData] = useState([]);
  const click = async () => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${respository}`
    );
    //${respository}  sending quueryy to API.. api search data in database
    const { items } = await response.json();

    setUserData(items);
  };

  return (
    <div className="App">
      <div className="main">
        <GitHubIcon />
        <h2>Github</h2>
      </div>
      <input
        type="text"
        value={respository}
        placeholder-="Search"
        onChange={(e) => {
          setRespository(e.target.value);
        }}
        className="search"
      />
      <button className="btn" onClick={click}>
        Search
      </button>

      <ul className="list">
        <div className="info">
          {userData.map((value) => (
            <li key={value.id}>
              <h3>{value.name} </h3>
              <p> {value.description}</p>
              <a href={value.url}>Link </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
