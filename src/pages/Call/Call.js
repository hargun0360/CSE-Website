import React from 'react'
import Banner from '../../Components/banner/CallBanner'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Guidelines from '../../assets/documents/Guidelines.pdf'
import Template from '../../assets/documents/Template.docx'
import './Call.css'
import Main from '../../Components/Call/Call'
import Tracks from '../../Components/Theme/Theme'

function Call() {
  return (
    <>
      <Header active='call' />

      <Main />
      <Tracks />


      <br /> <br />
      <Footer />
    </>
  );
}

export default Call;
