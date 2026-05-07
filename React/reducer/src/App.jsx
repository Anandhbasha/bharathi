import { useReducer } from "react"

const App = () => {
  const reducer = (state,action)=>{
    switch(action.a){
      case "count":
        return {...state,count:state.count+1}
      case "bg":
        return {...state,bg:state.bg==="dark"?"light":"dark"}
    }

  }
  const[state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <p>{state.bg}</p>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({a:"count"})}>Add</button>
      <button onClick={()=>dispatch({a:"bg"})}>Bg</button>
    </div>
  )
}

export default App