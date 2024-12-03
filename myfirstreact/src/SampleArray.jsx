import React from 'react'

import { userData } from './data'

let fruits = ["apple", "mango"]
console.log(userData)
let players = [
    {
        cricket:"Dhoni",
        tennis:"Sania",
        chess:"Anand",
        hockey:"Dyan Chand"
    }
]
let sampleArray = ["Apple","Mango",35,{userName:""}]
const SampleArray = () => {
  return (
    <div>
      {userData.map((user) => {
        return(
          <div style ={{border :"1px solid blue"}}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.address.street}</div>
          </div>
        )
      })}
    </div>
  )
}

export default SampleArray
