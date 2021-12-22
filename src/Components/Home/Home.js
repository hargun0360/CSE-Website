import React, { Component } from "react";
import path from '../../assets/icons/rightsmall.svg';
import logopath from '../../assets/icons/enlogo.png';
import {ReactComponent as Calendar} from '../../assets/icons/calendar.svg';
import {ReactComponent as Desktop} from '../../assets/icons/mob.svg';
import Gallery from '../Gallery/Gallery'

class Home extends Component {

    render(){
      return (
        <div id="home">
<div className="d-flex container pt-5 justify-content-between">
            <div className="">
                <div id="bg-green" className="d-inline-block p-2 mt-3">
                1st INTERNATIONAL CONFERENCE on
                </div>
                <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5>
                <h2 className="text-uppercase greenhead bold-text display-4">Green Energy<br/>and Computing</h2>
                <Calendar/> <h5 className="greytext d-inline m-auto">11-12 Nov 2022</h5>
            </div>
            <div className="w-50 d-flex deskicon" ><Desktop className="w-50 m-auto"/></div>
</div>


            <div className="container mt-4">
            <Desktop className="w-50 mobicon"/>
            </div>


<div id="date" className="target mt-3">
            <div className="container" >
            <h1 className="mb-3 green-heading">Date and Venue of the Conference</h1>
            <p>The conference hosted by Department of Electrical and Electronics Engineering, will be held offline at AKGEC, Ghaziabad, Uttar Pradesh, India from 11 Nov. 2022 to 12 Nov. 2022. The conference will include regular sessions with poster/oral presentations, global and technical sessions, panel discussions and poster presentations organized in AKGEC.</p>
            </div>
            </div>

<div id="theme" className="target">
            <div className="container mb-5" >
            <h1 className="mb-3 green-heading">Conference Theme</h1>
            <p>The International Conference on Advancements & Key Challenges in Green Energy and Computing (AKGEC-2022) will offer themes in the engineering aspects of renewable energy and computing. The main aim of this conference will be to provide an international premier forum for the presentation of new advances and research results in the field of Green Energy, Computing and security, sustainable development, Artificial intelligence and Embedded Systems. The focus area and tracks of the conference would be:</p>
            <p><span className="bold-text">Track 1:</span> Green Energy, Electric Drives and Smart Grid<br/>
            <span className="bold-text">Track 2:</span> Computing and Security<br/>
            <span className="bold-text">Track 3:</span> Sustainable Technologies and Development<br/>
            <span className="bold-text">Track 4:</span> Artificial Intelligence and Embedded Systems</p>
            </div>
            </div>

        </div>
      );
    }
            
}
    
  
  export default Home;