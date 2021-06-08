import { useState } from "react"


function useInput(initalValue) {
   const [value, setvalue] = useState(initalValue);
     const reset=()=>{
        setvalue('')
    }
    const bind={
        value,onChange:e=>{setvalue(e.target.value)}
    }
    return [value,bind,reset]
}

export default useInput
