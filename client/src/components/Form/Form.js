import React from "react";

const formStyle = {
    borderStyle: "2px solid black"
}

export const Form = ({children}) => (
    <form style={formStyle}>
        {children}
    </form>
);
