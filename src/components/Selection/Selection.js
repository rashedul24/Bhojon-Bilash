import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Selection = (props) => {
  const { selection } = props
  console.log(props);
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div>
      <h3>{element} Selection: {selection.length}</h3>
      <ul>
        {
          selection.map(food => <li> {food.item}</li>)
        }
      </ul>
    </div>
  );
};

export default Selection;