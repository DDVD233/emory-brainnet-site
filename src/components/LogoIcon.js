import React from 'react'
import LogoSvg from '../images/emu-logo.svg'

export const LogoIcon = (props) => {
  return (
    <img {...props} style={{
      margin: 'auto'
    }} alt="logo" src={LogoSvg}/>
  )
}
export default LogoIcon
