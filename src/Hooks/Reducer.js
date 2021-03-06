import React, { useReducer } from 'react'
function reducer(state,action){
    switch(action.type){
        case 'incremnet':
            return {count : state.count+1}
        
        case 'decrement':
            return {count : state.count-1}
    }
}
function Reducer() {
     const [state, dispatch] = useReducer(reducer, {count : 0})
     function increment(){
         dispatch({type : 'incremnet'});
     }
     function decrement(){
         dispatch({type: 'decrement'})
     }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Reducer
