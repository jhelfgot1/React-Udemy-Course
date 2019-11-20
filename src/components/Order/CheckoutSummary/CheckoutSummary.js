import React from "react";
import Burger from "../../Buger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: "100%", margin: "auto", display: "flex" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.cancelHandler} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continueHandler} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
