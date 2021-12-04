import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import "./Dish.css"

const Dish = (props) => {
  const { item, src, Ingredients, serveTime, price } = props.dish;
  const element = <FontAwesomeIcon icon={faUtensils} />

  return (
    <div>
      <div className="col-md-12">
        <div className="card card-bg">
          <img src={src} className="card-img-top img-thumbnail card-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Name: {item}</h3>
            <p><span className="fw-bold">Serve Time</span>: { serveTime}</p>
            <p className="card-text">
              <span className="fw-bold">Ingredients: </span>
              {Ingredients}
            </p>
            <p><span className="fw-bold">Price</span>: {price} tk.</p>
            <button
            onClick={()=>props.selectionCart(props.dish)}
            className="btn btn-primary">{element} add item</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dish;
