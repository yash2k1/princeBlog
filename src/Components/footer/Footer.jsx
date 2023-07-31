import React from "react"
import "./FooterStyle.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
       <div className="footerText"><i class="fa-regular fa-copyright"></i>
        
        <div className="companyName">The siren</div>
        </div>
        </div>
        <a href="" target="_blank" className="instaFooter">
        <i class="fa-brands fa-instagram"></i>
        <div className="insta"> instagram</div>

        </a>
        <a  href="tel: 9953152275" className="callFooter">
        <i class="fa-solid fa-phone"></i>
        <div className="phone">  call us</div>
        </a>
      </footer>
    </>
  )
}

export default Footer
