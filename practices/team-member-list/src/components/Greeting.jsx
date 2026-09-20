import React from 'react'

const Greeting = ({userName}) => {
    console.log(userName)
  return (
    <h2>Hello, I am {userName}</h2>
  )
}

export default Greeting