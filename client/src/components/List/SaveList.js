import React from "react";

export const SaveList = props => (
  <li className="list-group-item ml-3">
    <a href={props.url}>{props.title}</a>
    <p>{props.date}</p>
    {props.children}
  </li>
);
