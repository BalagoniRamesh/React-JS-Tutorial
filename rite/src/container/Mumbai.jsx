import React from 'react'
import Kolkata from './Kolkata'

import { useData } from '../context/ExampleContext'

const Mumbai = ({gift}) => {

   const{surprise} = useData()

  return (
    <div>Mumbai
      <h2> My name is {surprise.captain}</h2>
        <Kolkata gift={gift}/>
    </div>
  )
}

export default Mumbai
