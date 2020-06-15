import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h4>
        Go back to the <Link to="/">Home</Link> page.
      </h4>
    </div>
  );
}
export default PageNotFound;
