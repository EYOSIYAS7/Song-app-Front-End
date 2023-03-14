import { useHistory } from "react-router-dom";
import React from "react";

const NotFound = () => {
  const history = useHistory();
  const redirectfun = () => {
    window.location.reload(true);
    history.push("/");
  };
  return <div>{redirectfun()}</div>;
};

export default NotFound;
