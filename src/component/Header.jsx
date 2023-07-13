import React from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Header = () => {


  return (
    <div  data-aos="fade-down"  className='header' >
        <div data-aos="fade-down"className='flex'>
          <div data-aos="fade-down" className='logo'>
        <div data-aos="fade-down" className='text-animate'> 
        <h3 data-aos="fade-down" className='title'>Supersonic Themes 
        </h3></div></div>
        {/* <button className='getstarted'>GET STARTED</button> */}
        <div  data-aos="fade-down"class="btn-box">
         <a data-aos="fade-down" href="#" class="btn">Let's Talk </a>
          </div>


        <ul data-aos="fade-down" className='nav '>
            <a data-aos="fade-down"className='link btn '>Home </a>
            <a data-aos="fade-down" className='link btn'>About </a>
            <a data-aos="fade-down" className='link btn'>Services </a>
            <a data-aos="fade-down" className='link btn'>Contact</a>
        </ul>
        </div>

    </div>
  )
}

export default Header