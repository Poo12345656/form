import React from 'react'
import classNames from 'classnames'
import style from "./Text.module.css"


function Text({children,text,as:Tag="p",color, size,...rest}) {
    const testClasses = classNames(style.testWrapper,{
        [style[color]]: !!color,
        [style[size]]: !!size,
        
    });

  return (
    <Tag className={testClasses}{...rest}>
        {children||text}
    </Tag>
  )
}

export default Text