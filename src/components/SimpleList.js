import React from "react";
import { Link } from "react-router-dom";

export function SimpleList(props) {
  return (
    <ul className="list-group">
      {props.items.map(item => (
        <li className="list-group-item list-group-item-light" key={item.name}>
          {item.redirectTo ? <p>{item.name}</p> : <span>{item.name}</span>}
          {item.redirectTo && (
            <Link className="btn btn-primary" to={item.redirectTo}>
              Details
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
