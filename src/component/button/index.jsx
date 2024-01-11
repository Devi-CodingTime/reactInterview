import React from 'react'
import './button.css';
const Button=({className,type,btnText,onClick})=>{
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>{btnText} </button>
    </div>
  )
}
export default Button;