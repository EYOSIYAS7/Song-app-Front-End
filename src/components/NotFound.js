import { useHistory } from "react-router-dom";
import React from "react";

const NotFound = () => {
  const history = useHistory();
  const redirectfun = () => {
    console.log("redirect is called");
    window.location.reload(true);
    history.push("/");
  };
  return (
    <div>
      redirecting to home
      {redirectfun()}
    </div>
  );
};

export default NotFound;
