import React from 'react'


    const one = ["apple", "mango"]
    const two = ["grapes", "orange"]
    const three = ["pinapple", "banana"]

    const fruits = [...one, ...two, ...three]

    console.log(fruits)

    const obj1 = {a:1, b:2}
    const obj2 = {c:3, d:4}

    const total = {...obj1, ...obj2}

    console.log(total)

const Circuit = () => {
  return (
    <div>
      
    </div>
  )
}

export default Circuit
