import React, { Component } from "react";

class Theme extends Component {

    render() {
        return (
            <div id="theme" className="target">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Plans for Publication of Proceedings </h1>
                    <ul>
                        {/* <li>The proceedings will be published by Springer and online.</li> */}
                        <li>All the presented papers will be indexed in a Scopus Journal.</li>
                        <li>Best paper award will be given for each theme.</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Theme;