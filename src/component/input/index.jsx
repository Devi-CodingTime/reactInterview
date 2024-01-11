import React from 'react'
import './input.css';
const Input=({className,type,placeholder,value,onChange, name})=> {
  return (
    <div>
      <input className={className} type={type} placeholder={placeholder} 
      name={name} value={value} onChange={onChange}/>
    </div>
  )
}
export default Input;