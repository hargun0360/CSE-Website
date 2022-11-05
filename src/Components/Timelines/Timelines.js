import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Theme extends Component {

  render() {
    return (
      <div id="timeline" className="target">
        <div className="container" >
          <h1 className="mb-3 green-heading">Important Timelines </h1>

          <Table bordered >
            <tbody>
              <tr>

                <td>Invitation for Papers </td>
                <td>25th March 2022</td>



              </tr>
              <tr>
                <td>Submission of Paper  </td>

                <td>30th June 2022</td>



              </tr>
              <tr>
                <td>Notification to Authors    </td>
                <td>10th September 2022</td>
              </tr>

              <tr>
                <td>Final Version of Accepted Submissions   </td>
                <td>10th  October 2022</td>
              </tr>

              <tr>
                <td>    Registration and Camera Ready Copy Submission   </td>
                <td>25th October 2022</td>
              </tr>

              <tr>
                <td>Conference Date </td>
                <td >11-12th November 2022</td>
              </tr>
            </tbody>
          </Table>


        </div>
      </div>
    );
  }
}


export default Theme;