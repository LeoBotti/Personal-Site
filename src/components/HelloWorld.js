import React from "react";

const HelloWorld = (props) => {
  return(
    <div className="HelloWorld">
      Hello, {props.name || "World"}
    </div>
  )
}

export default HelloWorld;