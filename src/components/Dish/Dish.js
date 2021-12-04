import React from "react";
import "./Dish.css"

const Dish = (props) => {
  const { item, src, Ingredients, serveTime, price } = props.dish;

  return (
    <div>
      <div className="col-md-12">
        <div className="card">
          <img src={src} className="card-img-top img-thumbnail card-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Name: {item}</h3>
            <p className="card-text">
              <span className="fw-bold">Ingredients: </span>
              {Ingredients}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
