import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header'
import './Committee.css'
import Main from '../../components/Committee/Committee'

function Committee() {
  return (
    <>
    <Header active='committee'/>
    <Main/>
      <Footer />
    </>
  );
}

export default Committee;
