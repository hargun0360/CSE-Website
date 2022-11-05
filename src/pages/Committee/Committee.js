import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header'
import './Committee.css'
import Main from '../../Components/Committee/Committee'

function Committee() {
  return (
    <>
      <Header active='committee' />
      <Main />
      <Footer />
    </>
  );
}

export default Committee;
