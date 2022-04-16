import React from 'react'
import list from '../data'
import Card from './Card';
import  '../styles/Interface.css'

const Interface = ({handleClick}) => {
  
    return ( 
       <section>
           {
               list.map((item)=><Card key={item.id} items={item} handleClick= {handleClick}/>)
           }
       </section>
     );
}
 
export default Interface;