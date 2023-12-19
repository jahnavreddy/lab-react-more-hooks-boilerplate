import React, { useReducer, useState } from 'react'

const reducer = (state,action) =>{
  let{type} =action

  if(type == "INCREASE"){
    return state+1
  }
  if(type== "DECREASE"){
    return state-1
  }

  return state
}

const initValue = 0

const UseReducer = () => {

  // const[count,setCount] = useState(0)

  const [count , dispatch] = useReducer(reducer,initValue)

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=>{
        dispatch({type: "DECREASE"})
      }}>-</button>
      <button onClick={()=>{
        dispatch({type: "INCREASE"})
      }}>+</button>



    </div>
  )
}

export default UseReducer