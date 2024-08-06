import React from 'react'
import { FlexContent, Footer, Hero, Navbar, Sales, Stories,  } from './components'
import {footerAPI, heroapi, highlight, popularsales,sneaker,story,topratesales} from './data/data.js'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      
    </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App