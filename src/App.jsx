import React from 'react'
import { Header, Sales,  } from './components'
import {heroapi, popularsales,topratesales} from './data/data.js'

const App = () => {
  return (
    <>
    <Header heroapi={heroapi}/>
      <Sales endpoint={popularsales} />
      <Sales endpoint={topratesales} />
    </>
  )
}

export default App