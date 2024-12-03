import React, { useState, useEffect } from 'react'
const userDetails = "https://jsonplaceholder.typicode.com/posts";

console.log('I am link from API:',userDetails)
//Fetch(Read/get) data from API link 
const UserPage = () => {
    const[user, setUser] = useState([userDetails])

    const userHandler = async() =>{
       const response = await fetch(userDetails)
       const newData = await response.json() //{/*It will give json data */}
       setUser(newData)
    }

useEffect(() => {
 console.log(userHandler())
},[])
   
console.log(user);
  return (
    <div>
      {user.map((item) => {
        return(
          <div className="userSection">
          <h1 style={{color:"blue"}}>'userId: '{item.userId}</h1> 
          <h1 style={{color:"blue"}}>'id: '{item.id}</h1> 
          <h2 style={{color:"blue"}}>'title: '{item.title}</h2>  
          <h3 style={{color:"green"}}>'body: ',{item.body}</h3>  
          </div>
        )
      })}    
    </div>
  )
}

export default UserPage
