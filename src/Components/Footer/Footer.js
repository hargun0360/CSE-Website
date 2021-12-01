import React, { Component } from "react";
import {ReactComponent as Logo} from '../../assets/icons/akgec.svg';
import {ReactComponent as SIlogo} from '../../assets/icons/silogo.svg';


    class Theme extends Component {
            
        render(){
            return (
            <div id="footer" className="d-flex flex-column align-items-center justify-content-center pb-0 mb-0" >
            <Logo/>
            <p className="mt-3 text-muted foottext">Ajay Kumar Garg Engineering College, Ghaziabad</p>
            <div class="row text-light">
            <div class="col-sm"></div>
  </div>

  <div className="hrline"></div>
  <div className='d-flex align-items-center pt-2 pb-0 justify-content-center footer-bottom text-light si-text'>
        DESIGNED &amp; DEVELOPED BY : <SIlogo className="silogo" /> <a href="https://silive.in"  rel="noreferrer" className="si" target="_blank">SOFTWARE INCUBATOR</a>
        </div>
            </div>
            );
        }          
    }
                
              
export default Theme;