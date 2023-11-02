import React from 'react'
import './Showcase.scss'
import Button from '../Common/Button'
// import showImg from ".../assets/img/showcase-background.png";


const Showcase = () => {
  return (
    <div>
      {/* showcase-start*/}
      <section className='showcase'>
        <div className="container">
          <div className="showcase-inside">
            <div className="showcase-text">
              <h3>Pompeo POttery</h3>
              <h1>Unique Porcelain Stone Collection</h1>
              <p>Unique & modern pottery made by our master in porcelain & stones</p>
              <Button>Shop Collection</Button>
            </div>
            <div className="showcase-img">
              <img src=".../assets/img/showcase-background.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showcase
