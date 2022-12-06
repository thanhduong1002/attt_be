import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const handleSearch = () => {
    axios({
      baseURL: "http://localhost:8000/search",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        search: search,
      }),
    })
      .then((res) => {
        console.log(res.data);
        setResult(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Search with author {search === '' ? null : search}</h1>
      <input
        placeholder="Enter author's name"
        style={{ borderWidth: "1px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>show search</button>
      <Link to="/">Back to Home</Link>
      <div>
        {result
          ? result.map((element, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                  w="80vw"
                  h="10vh"
                  key={index}
                >
                  <div>
                    <h2>Author</h2>
                    <h3>{element?.author}</h3>
                  </div>
                  <div>
                    <h2>Name news</h2>
                    <h3>{element?.name}</h3>
                  </div>
                  <div>
                    <h2>Name newspaper</h2>
                    <h3>{element?.newspaper}</h3>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
