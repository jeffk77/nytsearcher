import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <h3>{props.title}</h3>
    <p>{props.date}</p>
    <p>{props.synopsis}</p>
    {props.children}
  </li>
);
