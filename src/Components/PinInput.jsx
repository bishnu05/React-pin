import React, { forwardRef } from 'react'

const PinInput = forwardRef(({singleInputHandler,onBackspaceHandler,isOtpValid},ref) => {

 const handleKeyUp=(e)=>{
    if(e.keyCode===8 && !e.target.value){
        onBackspaceHandler(e)
    }
    else{
        singleInputHandler(e)
    }
 }

  return (
    <input className={isOtpValid?"correctOtp":""} ref={ref} 
      maxLength={1} 
      onKeyUp={handleKeyUp}
       onChange={(e)=>singleInputHandler(e)}
      />
  )
});

export default PinInput