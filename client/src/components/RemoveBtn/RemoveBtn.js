import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const RemoveBtn = (props) => (
  <span className="btn remove-btn" {...props}>
    ✗
  </span>
);

export default RemoveBtn;
