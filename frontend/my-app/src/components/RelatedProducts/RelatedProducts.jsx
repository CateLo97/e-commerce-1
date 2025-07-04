import React from 'react'
import data_product from '../Assets/data'
import Item from '../Items/Item'
import './RelatedProducts.css'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1> Related Products </h1>
        <hr />
        <div className="related-products-items">
            {data_product.map((item, i)=>{
                return <Item key={i} 
                    id={item.id}
                    name={item.name}
                    img={item.img} 
                    title={item.title} 
                    new_price={item.new_price} 
                    old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts