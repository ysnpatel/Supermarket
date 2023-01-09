import React, {useState} from 'react'



export default function Product() {

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
    setTheme('red')
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  } 


  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  ) 
}
 