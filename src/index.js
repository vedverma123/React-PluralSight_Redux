import React from "react";
import { render } from "react-dom";

function Test() {
  return "Hello World";
}

render(<Test />, document.getElementById("app"));
