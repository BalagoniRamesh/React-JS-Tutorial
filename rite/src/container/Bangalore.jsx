import React from 'react'
import { useData } from '../context/ExampleContext'

const Bangalore = ({gift}) => {
const {surprise} = useData()

  return (
    <div>  <h4>I am Bangalore, <span style={{color:"green"}}>{surprise.game}</span> Recieved from Delhi</h4></div> 
    // <div>  <h4>I am Bangalore, <span style={{color:"green"}}>{gift}</span> Recieved from Delhi</h4></div>     
  )
}

export default Bangalore
