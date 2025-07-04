import React from 'react';
import './Breadcrum.css';
import { IoIosArrowForward } from "react-icons/io";
/**import icon */


const Breadcrum = (props) => {
    const { product } = props;

  return (
    <div className='breadcrum'>
            Home <IoIosArrowForward /> {product.category} <IoIosArrowForward />{product.name}
    </div>
  )
}

export default Breadcrum