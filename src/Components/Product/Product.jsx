import React from 'react'
import './Product.css'
import '../Common/Title.jsx'
import simbol from "../../assets/img/&.png"
import pottery1 from '../../assets/img/pottery1.png'
import pottery2 from '../../assets/img/pottery2.png'
import pottery from '../../assets/img/pottery.png'
import pot from '../../assets/img/vase (1).png'
import pot1 from '../../assets/img/vase (2).png'
import background from '../../assets/img/vase-background.png'
const Product = () => {
  const images = [pottery, pottery1, pottery2]
  return (
    <div>
      <section className='product'>
        <div className="container top">
          <div className="product-header">
            <h3 className='universal-red-text'>Product Categories</h3>
            <h1 className='universal-heading'>Porcelain <span><img src={simbol} alt="" /></span>Pottery</h1>
          </div>
          <div className="product-imgs">
            {images.map((item) =>(
              <img src={item} alt="" />
            ))}
          </div>
          <div className="product-text">
            <div className="product-text-one">
              <h1>Hand Grafted <br /> Pottery since 1990</h1>
              <p className='universal-ordinary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
            </div>
            <div className="product-text-two">
              <h1>We Provide Premium <br /> Pottery Produts</h1>
              <p className='universal-ordinary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
            </div>
          </div>
        </div>
        <div className="pots">
        <div className="container">
          <div className="vase-one">
            <img src={pot} alt="" />
            <img className='background' src={background} alt="" />
            <div className="pot-text">
              <h1>Gold & Black Pottery</h1>
              <p className='universal-ordinary-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
              <h4>View Details</h4>
            </div>
          </div>
          <div className="vase-two">
            <div className="pot-text">
              <h1>Gold & Black Pottery</h1>
              <p className='universal-ordinary-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
              <h4>View Details</h4>
            </div>
            <img src={pot1} alt="" />
            <img className='background2' src={background} alt="" />
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
