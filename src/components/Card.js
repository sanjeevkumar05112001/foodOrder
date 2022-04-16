import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Card = ({items, handleClick}) => {
    const {img,title,chief,price} = items
    return ( 
     <div className="parent">
        <div className="cards">
              
              <div className="image_box">
                  <div class="price-tag">
                      <p>Rs {price}</p>
                  </div><img src={img} alt="" /></div>
              
              <div className="details" >
                  <div  className="foodName">{title}</div>
                  <div className='price'><button onClick={()=>handleClick(items)}>Add to cart</button></div>
              </div>
             </div>

     </div>


     );
}
 
export default Card;