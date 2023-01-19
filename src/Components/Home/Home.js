import React, { Component } from "react";
import path from '../../assets/icons/rightsmall.svg';
import logopath from '../../assets/icons/naya.png';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Desktop } from '../../assets/icons/mob.svg';
import Gallery from '../Gallery/Gallery'

class Home extends Component {

  render() {
    return (
      <div id="home">
        <div className="d-flex container pt-5 justify-content-between">
          <div>
            {/* <img src={logopath} class="nayi" /> */}
            <div id="bg-green" className="d-inline-block p-2 mt-3">
              INTERNATIONAL CONFERENCE on
            </div>
            {/* <h5 className="greytext mt-2 ">Advancements and Key Challenges in</h5> */}
            <h2 className="text-uppercase greenhead bold-text display-4">Advanced Computing and <br />Emerging Technologies (ACET)</h2>
            <Calendar /> <h5 className="greytext d-inline m-auto">9-10 February 2024</h5>
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center deskicon" >
            {/* <Desktop className="d-inline-block w-50 m-auto" /> */}
            <img src={logopath} class="nayi" />
            </div>
        </div>


        <div className="container mt-4 w-50 mobicon">
          {/* <Desktop className="" /> */}
          <img src={logopath} class="nayi" />
        </div>


        <div id="date" className="target mt-3">
          <div className="container" >
            <h1 className="mb-3 green-heading">Date and Venue of the Conference</h1>
            <p>The conference organized by Department of Computer Science & Engineering, will be held offline at AKGEC, Ghaziabad, Uttar Pradesh, India on 9-10 February 2024 in collaboration with IEEE Uttar Pradesh Section. The conference will include regular sessions with poster/oral presentations, global and technical sessions, panel discussions and poster presentations organized in AKGEC.</p>
          </div>
        </div>

        <div id="theme" className="target">
          <div className="container mb-5" >
            <h1 className="mb-3 green-heading">Conference Theme</h1>
            <p>The international conference on  Advanced Computing and Emerging Technologies (ACET-2024) will offer themes in the engineering aspects of renewable energy and computing. The main aim of this conference will be to provide an international premier forum for the presentation of new advances and research results in the field of Green Energy, Computing and security, sustainable development, Artificial intelligence and Embedded Systems. The focus area and tracks of the conference would be:</p>
            <p><span className="bold-text">Track 1:</span> Advances in Machine Learning and Deep Learning<br />
              <span className="bold-text">Track 2:</span> Advances in Data Science<br />
              <span className="bold-text">Track 3:</span> Applications of Artificial Intelligence in Interdisciplinary areas<br />
              <span className="bold-text">Track 4:</span> High Performance Computing<br />
              <span className="bold-text">Track 5:</span> Advances in Communication and Networks<br />
              <span className="bold-text">Track 6:</span> Advanced Algorithms<br />
              <span className="bold-text">Track 7:</span> Teaching & Learning Systems</p>
          </div>
        </div>

      </div>
    );
  }

}


export default Home;