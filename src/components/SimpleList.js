import React from "react";
import { Link } from "react-router-dom";

export function SimpleList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.name}>
          <p>{item.name}</p>
          {item.redirectTo && <Link to={item.redirectTo}>Details</Link>}
        </li>
      ))}
    </ul>
  );
}
