// rafce cria a estrutura básica do componente
import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Fatures, Footer, Header, Possibility, whatGPT3 } from './containers'
import Features from './containers/features/Features'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
 