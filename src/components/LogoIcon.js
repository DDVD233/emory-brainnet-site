import React from 'react'
import LogoSvg from '../images/CBIS_logo_white.png'

export const LogoIcon = (props) => {
  return (
    <img {...props} style={{
      margin: 'auto'
    }} alt="logo" src={LogoSvg}/>
  )
}
export default LogoIcon
