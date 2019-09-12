import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">See users</Link>
    </div>
  );
}
