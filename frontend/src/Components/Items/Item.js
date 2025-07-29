import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'> 

     <Link to={`/product/${props.id}`}>  <img  onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link> 
     {/* onClick={window.scrollTo(0,0)} we use this for, when we open any product link or image we go on the top     */}
        <p>{props.name}</p>

        <div className="item-prices">


            <div className="item-prices-new">
                {props.new_price}$
            </div>

            <div className="item-prices-old">
                {props.old_price}$
            </div>


        </div>
      
    </div>
  )
}

export default Item
