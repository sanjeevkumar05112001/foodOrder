import React,{useEffect, useState} from 'react'
import '../styles/cart.css'
const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const handleRemove = (id)=>{
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice = ()=>
    {
        let ans = 0;
        cart.map((items) => (ans += items.amount * items.price));
        console.log(ans);
        setPrice(ans);
    };

    useEffect(() =>
    {
        handlePrice();
    })

    return ( 
    <article>
        {cart.map((item)=>(
            <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
                <div >
                    <button style={{width:'30px',backgroundColor:'green'}} onClick={()=>handleChange(item,1)}>+</button>
                    <button style={{width:'30px',backgroundColor:'skyblue'}}>{item.amount}</button>
                    <button style={{width:'30px',backgroundColor:'red'}} onClick={()=>handleChange(item,-1)}>-</button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <button onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
            </div>
        ))}
        <div className='total'>
                <span>TOTAL PRICE </span>
                <span>Rs - {price}</span>
            </div>
        </article>    
         );
}
 
export default Cart;