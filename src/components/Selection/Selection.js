import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Selection = (props) => {
  // destructuring
  const { selection } = props;
  // fontawesome icon
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  // total cost calculation
  const totalReducer = (oldValue, newValue) =>
    oldValue + parseFloat(newValue.price);

  const total = selection.reduce(totalReducer, 0);
  return (
    // cart items calculation
    <div className="bg-success bg-gradient rounded p-3 position-fixed ">
      <h3>
        {element} Item Selected: {selection.length}
      </h3>
      <h2>Total Price: {total} Taka</h2>
      <ul>
        {selection.map((food) => (
          <li> {food.item}</li>
        ))}
      </ul>
      <button className="btn btn-primary">Order Now</button>
    </div>
  );
};

export default Selection;
