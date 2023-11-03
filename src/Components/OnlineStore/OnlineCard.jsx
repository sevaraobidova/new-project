
import React from 'react'
import './OnlineStore.scss'

const OnlineCard = (props) => {
    return (
        <div className=' '>

            
                <div className="online-card">
            <img src={props.image} alt="product img" />
            <h3>{props.desc}</h3>
            <p>{props.price}</p>
          </div>
           
        </div>
    )
}
export default OnlineCard;