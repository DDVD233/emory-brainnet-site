import React from 'react'
import LogoSvg from '../images/emu-logo.svg'

export const LogoIcon = (props) => {
  return (
    <img {...props} alt="logo" src={LogoSvg}/>
  )
}
export default LogoIcon
