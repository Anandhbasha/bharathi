import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slices/Slice'

const App = () => {
  const adds = useSelector((state)=>state.changeCount.count) 
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <p>{adds}</p>
      <button onClick={()=>{dispatch(decrement(1))}}>Decrement</button>
      <button onClick={()=>{dispatch(increment(1))}}>Increment</button>
    </div>
  )
}

export default App