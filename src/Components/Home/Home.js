import React, { Component } from "react";
import {ReactComponent as Left} from '../../assets/icons/left.svg';
import {ReactComponent as Calendar} from '../../assets/icons/calendar.svg';

class Home extends Component {

    render(){
      return (
        <div id="home">
            {/* <div className="d-flex justify-content-end align-items-center">
                <div>hi</div>
                <Right />
            </div> */}

            <div className="container pt-5">
                
                <div id="bg-green" className="d-inline-block p-2 mt-3">
                1st INTERNATIONAL CONFERENCE on
                </div>
                <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5>
                <h2 className="text-uppercase green-heading display-4">Green Energy<br/>and Computing</h2>
                <Calendar/> <h5 className="greytext d-inline m-auto">11-Nov-2022</h5>
            </div>

            {/* <Left className="mt-4 mb-0" /> */}
            <div className="container" >
            <h1 className="mt-5 pt-5 mb-3 green-heading">Motivation</h1>
            <p className="bold-text">It is witnessed that in the past few years global warming issues are trending high. The cost of fossil fuel is increasing enormously and affecting the economic growth of the Nation. The production of Petrol, diesel and petroleum gas for the year 2022 is on hold due to decision taken by the summit.   It is therefore imperative to spread the awareness about environmental and economic issues created by the use of fossil fuel and the importance of stepping towards the green energy technology. The aim of this conference is to provide a forum for engineers, researchers, and specialists from academia, research centers and industry worldwide to discuss and present the latest developments and challenges in Green Energy and computational intelligence for sustainable Technologies.</p>
            </div>
        </div>
      );
    }
            
}
    
  
  export default Home;