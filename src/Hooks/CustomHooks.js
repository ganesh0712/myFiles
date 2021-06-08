import React, { useEffect } from 'react'

function CustomHooks(count) {
  useEffect(() => {
        document.title=`count-${count}`
        
    }, [count])
    
}

export default CustomHooks
