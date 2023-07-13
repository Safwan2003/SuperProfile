import ImageSlider from './ImageSlider';
// import './App.css';

function Slider() {
  const slides=[
    {
        title: 'Nature Image1',
        url: 'https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Nature Image2',
        url: 'https://images.unsplash.com/photo-1610047803124-64ddfad66909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80',
      },
      {
        title: 'Nature Image3',
        url: 'https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Nature Image4',
        url: 'https://images.unsplash.com/photo-1608241175281-722a1c6111be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      {
        title: 'Nature Image5',
        url: 'https://images.unsplash.com/photo-1523288863878-c79329df9b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1386&q=80',
      },
    ]
const containerStyles={
  width:"100vw",
  height:"50vw",
  margin:"0 auto", 
};
return (
<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      style={containerStyles}>
<ImageSlider slides = {slides}/>
      
    </div>
  );
}

export default Slider;
