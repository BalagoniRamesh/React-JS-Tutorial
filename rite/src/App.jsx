import React from 'react'
import SecondPage from './routing/SecondPage'
import FirstPage from './routing/firstPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './Navbar'
import Delhi from './container/Delhi'
import { GiftProvider } from './context/ExampleContext'


const App = () => {
  const gift = "Apple" 
  return (

    <div>
      <h1>Sending Gift to Bangalore</h1>
      
{/* Multiple values */}
      <GiftProvider>
       <Delhi /> 
      </GiftProvider>

  {/* //Single value */}
        {/* <Delhi  gift={gift}/> */}
      {/* <NavBar />
      <Routes>
        <Route path='/abc' element={<FirstPage />} />
        <Route path='/xyz' element={<SecondPage />} />
        <Route path='/mango' element={<ThirdPage />} />
        <Route path='/banana' element={<FourthPage />} />
      </Routes> */}
    </div>
  )
}

export default App
