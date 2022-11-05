import React, { Component } from "react";
import path from '../../assets/icons/akglogo.png';
import { ReactComponent as SIlogo } from '../../assets/icons/silogo.svg';


class Theme extends Component {

    render() {
        return (
            <div id="footer" className="d-flex flex-column align-items-center justify-content-center pb-0 mb-0" >
                {/* <Logo className="mt-5"/> */}
                <img className="mt-5" src={path} />
                <p className="mt-3 mb-5 text-muted foottext">Ajay Kumar Garg Engineering College, Ghaziabad</p>
                <div class="row text-light">
                    <div class="col-sm"></div>
                </div>

                <div className="hrline"></div>
                <div className='d-flex align-items-center pt-2 pb-2 justify-content-center footer-bottom text-light si-text'>
                    DESIGNED &amp; DEVELOPED BY : <SIlogo className="silogo" /> <a href="https://silive.in" rel="noreferrer" className="si" target="_blank">SOFTWARE INCUBATOR</a>
                </div>
            </div>
        );
    }
}


export default Theme;