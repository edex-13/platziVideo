import React from 'react'
import '../assets/styles/components/Input.scss'
const Input = ({textPlaceholder , typeInput})=>(
  <input className="input" type={typeInput} placeholder={textPlaceholder} />
)

export default Input;