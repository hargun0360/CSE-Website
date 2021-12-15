import React, { Component } from "react";
import path from '../../assets/icons/rightsmall.svg';
import logopath from '../../assets/icons/enlogo.png';
import {ReactComponent as Calendar} from '../../assets/icons/calendar.svg';
import Gallery from '../Gallery/Gallery'

class Home extends Component {

    render(){
      return (
        <div id="home">

            <div className="container pt-5">
                {/* <img className="enlogo" src={logopath} height="100px" /><br/> */}
                <div id="bg-green" className="d-inline-block p-2 mt-3">
                1st INTERNATIONAL CONFERENCE on
                </div>
                <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5>
                <h2 className="text-uppercase greenhead bold-text display-4">Green Energy<br/>and Computing</h2>
                <Calendar/> <h5 className="greytext d-inline m-auto">11-12 Nov 2022</h5>
            </div>
            <div className="container mt-4">
            <img src={path} className="smallimg"/>
            </div>
            {/* <div className="container" >
            <h1 id="motivation" className="mt-5 mb-3 green-heading target">Motivation</h1>
            <p>It is witnessed that in the past few years global warming issues are trending high. The cost of fossil fuel is increasing enormously and affecting the economic growth of the Nation. The production of Petrol, diesel and petroleum gas for the year 2022 is on hold due to decision taken by the summit.   It is therefore imperative to spread the awareness about environmental and economic issues created by the use of fossil fuel and the importance of stepping towards the green energy technology. The aim of this conference is to provide a forum for engineers, researchers, and specialists from academia, research centers and industry worldwide to discuss and present the latest developments and challenges in Green Energy and computational intelligence for sustainable Technologies.</p>
            </div> */}

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