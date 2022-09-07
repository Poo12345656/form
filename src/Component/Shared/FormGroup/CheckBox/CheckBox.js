import classNames from 'classnames';
import React from 'react'
import style from "./CheckBox.module.css"
import Text from '../Text/Text';


function CheckBox({label,options,...rest}) {
 
  return (
    <div>
      {
        options.map((itm,index)=>{
          return <div key={index}>
             <input type="checkbox" classNames={style.selectWrapper} value={itm.value} {...rest}/>
             <Text text={itm.optionLabel} as="label" />
          </div>
        })
      }
     
    </div>
  )
}

export default CheckBox;