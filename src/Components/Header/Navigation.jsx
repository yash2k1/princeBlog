import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';


function Navigation() {
    const [isClick,setIsClick]=useState(false);
    const [className,setClassName]=useState('closeHamburger');
    const [navClassName,setNavClassName]=useState("nav");

    const handleClick=()=>{
        setIsClick(!isClick);
        console.log("click" ,isClick);
        if(!isClick) {
          setClassName('openHamburger')
           setNavClassName('openNav')

        }else{
          setClassName('closeHamburger')
          setNavClassName('nav')

        }
    }
  return (
    <>
    <div className='hamburger' onClick={handleClick}>
 <div className={className}></div>
 <div className={className}></div>
 <div className={className}></div>
 </div>
 <div className={navClassName}>
    <NavLink  onClick={handleClick} to='/'  className='nonActiveNav'  activeClass="active">Home</NavLink>
    <NavLink  onClick={handleClick} to='/Bollywood'  className='nonActiveNav'  activeClass="active">Bollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Hollywood'  className='nonActiveNav' activeClass="active">Hollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Technology' className='nonActiveNav' activeClass="active">Technology</NavLink>
    <NavLink  onClick={handleClick} to='/Fitness' className='nonActiveNav' activeClass="active">Fitness</NavLink>
    <NavLink  onClick={handleClick} to='/Food' className='nonActiveNav' activeClass="active">Food</NavLink>
  </div>


 </>
  )
}

export default Navigation