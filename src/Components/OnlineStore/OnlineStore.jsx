import React from 'react'
import './OnlineStore.scss'
import OnlineCard from './OnlineCard'

const OnlineStore = () => {
  const cardDetails = [
  // 1
    {
      imagUrl: 'https://i.pinimg.com/564x/ee/77/52/ee77522942da7df55474aad8e15f290a.jpg',
      desc:"Decor Plate",
      price:'$ 65.00 USD'
    }, 
    // 2
    {
      imagUrl: 'https://i.pinimg.com/564x/46/f2/27/46f2272ce066105fb57a20fdfeb8efd6.jpg',
      desc:"Mint Pottery",
      price:'$ 75.00 USD'
    },
    // 3
     {
      imagUrl:'https://i.pinimg.com/474x/8b/0c/d1/8b0cd1f3aac27d342be525aeb006adc4.jpg',
      desc:"Set Of Potterys",
      price:'$ 125.00 USD'
    },
    // 4
      {
      imagUrl:'https://i.pinimg.com/564x/46/f2/27/46f2272ce066105fb57a20fdfeb8efd6.jpg',
      desc:"Orange Ceramic",
      price:'$ 55.00 USD'
    },
    // 5
       {
      imagUrl:'https://i.pinimg.com/564x/ee/77/52/ee77522942da7df55474aad8e15f290a.jpg',
      desc:"Dark Bowl",
      price:'$ 115.00 USD'
    },
    // 6
     {
      imagUrl:'https://i.pinimg.com/564x/39/ae/2b/39ae2baeb3f6198c54abb01bfb9b9af8.jpg',
      desc:"Square Pottery",
      price:'$ 75.00 USD'
    }
      
  ]
  return (
    <div className='online-store container'>
      {/* Title component here */}

      {/* cards  */}

      <div className="online-cards">
         {cardDetails.map((item, i) => (<OnlineCard image={ item.imagUrl} desc={item.desc} price={item.price} />))
       
      }
     </div>
      
    
      {/* Button component here */}

    </div>
  )
}

export default OnlineStore
