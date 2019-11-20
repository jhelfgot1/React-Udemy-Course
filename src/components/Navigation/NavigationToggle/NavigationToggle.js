import React from "react";
import classes from "./NavigationToggle.css";

const navigationToggle = props => {
  return (
    <div onClick={props.click} className={classes.NavigationToggle}>
      Menu
    </div>
  );
};

export default navigationToggle;
