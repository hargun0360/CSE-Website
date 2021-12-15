import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
import image1 from "../../assets/about/image1.jpg";
import image2 from "../../assets/about/image2.png";
import image3 from "../../assets/about/image3.jpg";
import image4 from "../../assets/about/image4.png";
import image5 from "../../assets/about/image5.png";
import image6 from "../../assets/about/image6.jpg";
import image7 from "../../assets/about/image7.png";
import image8 from "../../assets/about/image8.png";
import image9 from "../../assets/about/image9.png";
import image10 from "../../assets/about/image10.png";
import image11 from "../../assets/about/image11.png";
import image12 from "../../assets/about/image12.jpg";


const AboutCarousel = () => {
    return(
        <>
        <Carousel itemsToShow={1} autoPlay={true} centerMode={true} emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false} >
        
        
        <img src={image1} className="carousel-img" alt="about-img" /> 
         <img src={image2} className="carousel-img" alt="about-img" /> 
        
        
        <img src={image3} className="carousel-img" alt="about-img" /> 
         <img src={image4} className="carousel-img" alt="about-img" /> 
        
        
        <img src={image5} className="carousel-img" alt="about-img" /> 
         <img src={image6} className="carousel-img" alt="about-img" />
        
        
        <img src={image7} className="carousel-img" alt="about-img" /> 
         <img src={image8} className="carousel-img" alt="about-img" /> 
        
        
        <img src={image9} className="carousel-img" alt="about-img" /> 
         <img src={image10} className="carousel-img" alt="about-img" /> 
        
         
         <img src={image11} className="carousel-img" alt="about-img" /> 
         <img src={image12} className="carousel-img" alt="about-img" /> 
 
         
        
      </Carousel>
      </>
    )
}


export default AboutCarousel;