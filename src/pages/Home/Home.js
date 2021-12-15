import React, { useState } from 'react';
import HomeCarousel from '../../components/carousel/HomeCarousel'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import './Home.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

import Main from '../../components/Home/Home'


function Home() {

  return (
    <>
    <Header active='home'/>
    <Main/>  
    <Footer />



    </>
  );
}

export default Home;
