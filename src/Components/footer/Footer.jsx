import React from "react"
import "./FooterStyle.css"
import Top from '../Header/Top'
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    
      <div className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
      <h1 className="fotterSiren"><Top/></h1>
      <div className="fotterBlogExplaine">“Blogging is hard because of the grind required to stay interesting and relevant.”</div>
      <div className="fotterSocialMedia">
        <Instagram/> <Facebook/> <LinkedIn/> <Twitter/>
      </div>
  
      </div>
          {/* constainer 2*/}
          <div className="footerContainer">
      <h1 className="fotterSiren">Services</h1>
      <Link to='/'        className='FooterNonActiveNav'>Home</Link>
    <Link to='/Bollywood' className='FooterNonActiveNav'>Bollywood</Link>
    <Link to='/Hollywood' className='FooterNonActiveNav'>Hollywood</Link>
    <Link to='/Technology'className='FooterNonActiveNav'>Technology</Link>
    <Link to='/Fitness'   className='FooterNonActiveNav'>Fitness</Link>
    <Link to='/Food'      className='FooterNonActiveNav' >Food</Link>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
      <h1 className="Resources">Resources</h1>
      <div className="help">Help</div>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
      <h1 className='readMore'>More</h1>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      </div>
      </div>
  
  )
}

export default Footer
