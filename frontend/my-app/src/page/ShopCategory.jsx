/* import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className="Shop-Category">
            <img src={props.banner}/>
        </div>
    );
    }

export default ShopCategory; */
/**** */

import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Item from "../components/items/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  // filtramos productos según la categoría
  const filteredProducts = all_product.filter(
    product => product.category === category
  );

  return (
    <div className="shop-category">

      {/* BANNER */}
      <div className="shop-category-banner">
        <div className="shop-category-banner-content">
          <div className="shop-category-banner-left">
            <h1>{category.toUpperCase()} COLLECTION</h1>
            <p>Find your style with the best {category} products</p>
            <button className="shop-category-button">Shop Now</button>
          </div>
          <div className="shop-category-banner-right">
            <img src={banner} alt={`${category} banner`} />
          </div>
        </div>
      </div>

      {/* filtro y sort */}
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1 - {filteredProducts.length}</span> products
        </p>
        <div className="shop-category-sort">
          Sort by <MdOutlineArrowDropDownCircle />
        </div>
      </div>

      {/* productos */}
      <div className="shop-category-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.image}
              title={product.title}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      
      <div className="shop-category-loadmore">
          Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
