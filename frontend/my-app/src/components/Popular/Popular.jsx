import React from "react";
import "./Popular.css";
import data_products from "../Assets/data";
import Item from "../items/Item";

const Popular = () => {
    return (
        <div className="popular">
            <h1>Popular In Women</h1>
            <hr/>
            <div className="popular-items">
                {data_products.map((item,i)=>(
                    <Item 
                        key={i}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        title={item.title}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
