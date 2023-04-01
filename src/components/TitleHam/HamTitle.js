import React from 'react'
import "./HamTitle.css"
import image1 from "../../images/Vector1.png"
import image2 from "../../images/Vector2.png"

const HamTitle = ({open, setOpen}) => {
  return (
    
    <div className="menu" >
    <div className="cross1" onClick={()=>setOpen(!open)}>
      <img src={image1} alt="" onClick={()=>setOpen(!open)}/>
    </div>
    <div className="cross2">
      <img src={image2} alt="" onClick={()=>setOpen(!open)}/>
    </div>
    <ul>
        <li  onClick={()=>setOpen(!open)} >
            <a href="#account" style={{
                                        height: '48px',
                                        width: '201px',
                                        left: '763px',
                                        top: '211px',}}>ACCOUNT</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#services" style={{
                                        height: '48px',
                                        width: '164px',
                                        left: '781px',
                                        top: '319px',
                                        }}>SERVICES</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#shop" style={{height: '48px',
                                        width: '101px',
                                        left: '813px',
                                        top: '427px',}}>SHOP</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#premium" style={{height: '48px',
                                        width: '164px',
                                        left: '781px',
                                        top: '535px'}}>PREMIUM</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#about" style={{height: '48px',
                                        width: '135px',
                                        left: '796px',
                                        top: '643px',}}>ABOUT</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#contact" style={{height: '48px',
                                        width: '194px',
                                        left: '766px',
                                        top: '751px',}}>CONTACT</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#faq" style={{height: '48px',
                                        width: '75px',
                                        left: '826px',
                                        top: '859px',}}>FAQ</a>
        </li>
      </ul>
        
    </div>
  )
}

export default HamTitle
