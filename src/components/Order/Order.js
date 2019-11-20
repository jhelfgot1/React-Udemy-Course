import React from "react";
import classes from "./Order.css";
const order = props => (
  <div className={classes.Order}>
    <p>
      Ingredients:{" "}
      {Object.keys(props.ingredients).map(key => (
        <span
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "8px"
          }}
          key={key}
        >
          {key} ({props.ingredients[key]})
        </span>
      ))}
    </p>

    <p>
      Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong>
    </p>
  </div>
);

export default order;
