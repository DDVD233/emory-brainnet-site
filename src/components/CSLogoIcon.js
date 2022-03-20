import React from 'react'
import LogoSvg from '../images/logo_white.png'

export const CSLogoIcon = (props) => {
    return (
        <img {...props} style={{
            margin: 'auto'
        }} alt="logo" src={LogoSvg}/>
    )
}
export default CSLogoIcon
