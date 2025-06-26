import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
        <img src={props.img} alt="Item" />
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