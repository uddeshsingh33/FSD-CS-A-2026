import React , { useState } from 'react'

function StateHandiling() {
    const [count, setCount] = useState(20);

    function incrementCount() {
        setCount(count + 4);
    }   
    function decrementCount() {
        setCount(count - 3);
    }
  return (
    <div>
        <h2>Counter value = {count}</h2>
        <button onClick={incrementCount}>Increment Counter</button>
        <button onClick={decrementCount}>Decrease Counter</button>
    </div>
  )
}

export default StateHandiling
