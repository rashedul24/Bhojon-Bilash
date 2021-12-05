import React, { useEffect, useState } from "react";
import Dish from "../Dish/Dish";
import Selection from "../Selection/Selection";

const Item = () => {
  const [dishes, setDishes] = useState([]);
  const [selection, setSelection] = useState([]);
  const selectionCart = (dish) => {
    const newSelection = [...selection, dish]
    setSelection(newSelection)
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);
  return (
    <div className="d-flex">
      <div className="col-md-9 p-5">
        <div className ="row row-cols-1 row-cols-md-3 g-4">
          {dishes.map(dish => (
            <Dish dish={dish}
              key={dish.id}
            selectionCart={selectionCart}
            ></Dish>
          ))}
        </div>
      </div>
      <div className="col-md-3 mt-5 p-3 text-center">
        <Selection selection={selection}></Selection>
      </div>
    </div>
  );
};

export default Item;
