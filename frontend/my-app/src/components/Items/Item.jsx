import React from "react";
import { Link } from "react-router-dom"; 
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} alt="Item" /></Link>
        <p>{props.name}</p>
        <div className="items-prices">
            <div className="item-price-new">
                <p>${props.new_price}</p>
            </div>
            <div className="item-price-old">
                <p>${props.old_price}</p>
            </div>
        </div>
    </div>
  );
}

export default Item; 
