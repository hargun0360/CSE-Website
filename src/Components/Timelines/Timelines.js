import React, { Component } from "react";
import { Table } from "react-bootstrap";

    class Theme extends Component {
            
        render(){
            return (
            <div id="timeline" className="target">
            <div className="container" >
            <h1 className="mb-3 green-heading">Important Timelines </h1>
            
            <Table bordered >
  <tbody>
    <tr>
      
      <td>Invitation for Papers </td>
      <td>15th January 2022</td>
      
      

    </tr>
    <tr>
    <td>Submission of Full Paper  </td>
      
      <td>15th April 2022</td>
     
      
      
    </tr>
    <tr>
    <td>Notification and Date of Acceptance     </td>
    <td>31st August 2022</td>
     
     
      
    

    </tr>

    <tr>
    <td>Date of Registration and camera ready copy   </td>
    <td>10th  October 2022</td>
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