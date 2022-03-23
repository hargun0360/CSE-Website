import React from 'react'
import Banner from '../../components/banner/CallBanner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Guidelines from '../../assets/documents/Guidelines.pdf'
import Template from '../../assets/documents/Template.docx'
import './Call.css'
import Main from '../../components/Call/Call'
import Tracks from '../../components/Theme/Theme'

function Call() {
  return (
    <>
    <Header active='call'/>

    <Main/>  
    <Tracks/>  
    

      <br /> <br/>
      <Footer />
    </>
  );
}

export default Call;
