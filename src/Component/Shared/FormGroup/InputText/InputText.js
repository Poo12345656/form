import classNames from 'classnames'
import style from "./InputText.module.css"
import React,{forwardRef} from 'react'
// use forward ref for manage all the inputs element attributes.
const InputText = forwardRef(({isError, ...rest}, ref) => {
  const textInput = classNames(style.inputWrapper,
    { 
     [style.error]:isError
    }
     
   );  
  return (
    <div>
      <input className={textInput} ref={ref} {...rest}  />
      
    </div>
  );
}
);

export default InputText

