import React, { useEffect, useState } from 'react';
import Dish from '../Dish/Dish';

const Item = () => {
  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data=>setDishes(data))
  },[])
  return (
    <div>
      <div className="col-md-9 m-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {
          dishes.map(dish=><Dish dish={dish}></Dish>)
        }
</div>
      </div>
      <div className="col-md-3">

      </div>
    </div>
  );
};

export default Item;