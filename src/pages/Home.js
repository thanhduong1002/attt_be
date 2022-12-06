import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
