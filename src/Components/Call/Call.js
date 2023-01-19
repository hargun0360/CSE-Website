import React, { Component } from "react";

class Theme extends Component {

    render() {
        return (
            <div id="call" className="target">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Call for Paper</h1>
                    <p>ACET-2024 is soliciting original, previously unpublished and high quality research papers addressing research challenges and advances in the tracks mentioned below. The topics of the conference include, but are not limited to:</p>

                    <p>The focus area and tracks of the conference would be:</p>
                    <p><span className="bold-text">Track 1:</span> Advances in Machine Learning and Deep Learning <br />
                        <span className="bold-text">Track 2:</span> Advances in Data Science<br />
                        <span className="bold-text">Track 3:</span> Applications of Artificial Intelligence in Interdisciplinary areas<br />
                        <span className="bold-text">Track 4:</span> High Performance Computing<br />
                        <span className="bold-text">Track 5:</span> Advances in Communication and Networks<br />
                        <span className="bold-text">Track 6:</span> Advanced Algorithms<br />
                        <span className="bold-text">Track 7:</span> Teaching & Learning Systems <br /></p>
                </div>
            </div>
        );
    }
}


export default Theme;