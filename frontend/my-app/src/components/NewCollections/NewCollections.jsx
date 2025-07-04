import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../items/Item'

 const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1> New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} 
                      id={item.id}
                      name={item.name}
                      img={item.img} 
                      title={item.title} 
                      new_price={item.new_price} 
                      old_price={item.old_price} />
                    
          })
        }
      </div>
    </div> 
  )
}

export default NewCollections
