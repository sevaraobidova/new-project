import { useState } from 'react'

import './App.css'
import Header from './Components/Layout/Header.jsx'
import Showcase from './Components/Showcase/Showcase'
import Product from './Components/Product/Product'
import OnlineStore from './Components/OnlineStore/OnlineStore'
import Shopping from './Components/Shopping/Shopping'
import News from './Components/News/News'
import Footer from './Components/Layout/Footer'

function App() {

  return (
    <>
    <Header />
    <Showcase />
    <Product />
    <OnlineStore />
    <Shopping />
    <News />
    <Footer />
    </>
  )
}

export default App
