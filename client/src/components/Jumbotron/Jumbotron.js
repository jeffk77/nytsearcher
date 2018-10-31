import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 25, textAlign: "center", backgroundColor: "coral" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
