import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import "./Dish.css"
import Rating from "react-rating";

const Dish = (props) => {
  const { item, src, Ingredients, serveTime, price, rating } = props.dish;
  const element = <FontAwesomeIcon icon={faUtensils} />
  return (
    <div>
      <div className="col-md-12">
        <div className="card card-hover card-bg">
          <img src={src} className="card-img-top img-thumbnail card-img" alt="..." />
          <div className="card-body text-center">
            <h4 className="card-title">Name: {item}</h4>
            <p><span className="fw-bold">Serve Time</span>: { serveTime}</p>
            <p className="card-text">
              <span className="fw-bold">Ingredients: </span>
              {Ingredients}
            </p>
            <p><span className="fw-bold">Price</span>: {price} Taka</p>
            <Rating
              readonly
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={rating}
                            
            ></Rating>
            <br />
            <br />
            <button
            onClick={()=>props.selectionCart(props.dish)}
              className="btn btn-primary ">{element} add item</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dish;
