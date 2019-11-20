import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../../hoc/Layout/Logo/Logo";
import NavigationToggle from "../NavigationToggle/NavigationToggle";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <NavigationToggle click={props.toggleHandler} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
