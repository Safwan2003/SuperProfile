


import React, { useState } from 'react'
// import left from './assets/left.png';
// import right from './assets/right.png';
import Header from './Header'
import  './Main.css'
import './ImageSlider.css'
const ImageSlider = ({slides}) => {
  const [currentIndex,setcurrentindex]=useState(0); 
   
   const slidesStyle={
    width: "fullwidth",
    height: "100vh",
    borderRadius:"10px",
    color:"white",
    // fontSize:"3rem",
    // textAlign:"center ",
    backgroundPosition:"center",
    backgroundPosition:"fixed",

    backgroundSize:"cover",
    backgroundImage:`url(${slides[currentIndex].url})`,
   };
   const sliderstyle={
     height:'100vh',
     position:"relative",
    threshHold:100,
      transition:'0.5',
      scaleOnDrag:true,
      transition:'all',
      marginTop:'5rem',
      // transitionDelay:'200s' ,
    };
  //  const leftArrowStyle={
  //   // position:"absolute",
  //   // top: "50%",
  //   // transform:"translate(0,-50%)",
  //   // right:"60px",
  //    fontSize:"45px",
  //    color:"#fff",
  //    zIndex:1,
  //   cursor:"pointer ",
  //   // display: 'flex',
  //   // justifyContent:"left",
  //   margin:'0 3px',
    
  // };
   
  //  const rightArrowStyle={
  //   //  position:"absolute",
  //   //  top: "50%",
  //   // transform:"translate(0,-50%)",
  //   // right:"80px",
  //   // fontSize:"45px",
  //   // color:"#fff",
  //   // zIndex:1,
  //   // cursor:"pointer ",
  //   fontSize:"45px",
  //   color:"#fff",
  //   zIndex:1,
  //  cursor:"pointer ",
  // //  display: 'flex',
  // //  justifyContent:"right",
  // //  alignItems:"right",
  //  margin:'0 3px',
    
  // };
   const goToprev= ()=>{
    const isFirstSlide =currentIndex===0;
    const newIndex =isFirstSlide ? slides.length-1 : currentIndex-1; 
    setcurrentindex(newIndex);
   };
   
   const goTonext= ()=>{
    const isLastSlide =currentIndex=== slides.length-1;
    const newIndex =isLastSlide ? 0 : currentIndex + 1; 
    setcurrentindex(newIndex);
    
     
  };
   const goToSlide =(slideIndex)=>{
    setcurrentindex(slideIndex);
   };
   const dotContainerStyles={
    display: 'flex',
    color:'white',
    padding:'1rem',
    justifyContent:"center",
backgroundColor:'black',
    // marginBottom:'20rem',
    // marginLeft: '5rem',
    // margin: '1rem', 
   };
   const dotStyles={
    margin:'0 3px',
    cursor:'pointer',
    justifyContent:"center",

      fontSize:'20px,'

   };
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    style={sliderstyle} className='slider-position'>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     style={slidesStyle}>
          <div className='slider-txt'>
        <h1 className='main-heading'>
    CREATIVE AGENCY THEME <br></br>WORDPRESS MULTIPURPOSE<br></br>
<button className='main-button'>Discover More</button>
</h1></div>
        </div>
    {/* <div style={dotContainerStyles}>
        {slides.map((slide,slideIndex)=>(
            <div key={slideIndex }style={dotStyles} onClick={()=>goToSlide(slideIndex)}>o</div>
       
    ))}
    
    </div>*/}
    <div 
    className='slider-function'> 

    <div className='leftArrowStyle' onClick={goToprev}>  PREV </div>
            <div className='rightArrowStyle' onClick={goTonext}>  NEXT </div>
            </div>    
    </div>
  )
}

export default ImageSlider
















































