import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
import img1 from "../../assets/carousel/img1.png";
import img2 from "../../assets/carousel/img2.png";
import img3 from "../../assets/carousel/img3.png";
import img4 from "../../assets/carousel/img4.png";
import img5 from "../../assets/carousel/img5.png";
import img6 from "../../assets/carousel/img6.png";

const HomeCarousel = () => {
    return(
        <>
        <Carousel itemsToShow={1} autoPlay={true} centerMode={true} emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false} >
         
         <img src={img1} className="carousel-img" alt="carousel-img" /> 
         <img src={img2} className="carousel-img" alt="carousel-img" /> 
       
         
         <img src={img3} className="carousel-img" alt="carousel-img" /> 
         <img src={img4} className="carousel-img" alt="carousel-img" /> 
            
            
             <img src={img5} className="carousel-img" alt="carousel-img" /> 
         <img src={img6} className="carousel-img" alt="carousel-img" /> 
             
        
         
        
      </Carousel>
      </>
    )
}


export default HomeCarousel;