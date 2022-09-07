import classNames from 'classnames';
import React from 'react'
import style from "./RadioButton.module.css"
import Text from '../Text/Text';

function RadioButton({ options, ...rest }) {

  return (
    <div>
      {
        options.map((itm, index) => {
          return <div key={index}>
            <input type="radio" classNames={style.radioWrapper} value={itm.value} {...rest} />
            <Text text={itm.option} as="label" />

          </div>
        })
      }
    </div>
  )
}



export default RadioButton;