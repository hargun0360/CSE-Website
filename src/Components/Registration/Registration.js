import React, { Component } from "react";
import { Table } from "react-bootstrap";

    class Theme extends Component {
            
        render(){
            return (
            <div id="registration" className="target mb-5">
            <div className="container" >
            <h1 className="mb-3 green-heading">Registration Fees</h1>
            
            {/* <Table bordered > */}
            
                <Table bordered>
            <tbody>
            <tr>
                        <th>Early Birds</th>
                        <th>Indian Author</th>
                        <th>Foreign Author</th>
                    </tr>
            <tr>
                <td> Participants from Industries </td> 
                <td>Rs. 7000</td>
                <td>$ 250</td>
            </tr>
            <tr>
                <td> Academia </td> 
                <td>Rs. 5000</td>
                <td>$ 200</td>
            </tr>
            <tr>
                <td> Research Scholars and students </td> 
                <td>Rs. 3000</td>
                <td>$ 150</td>
            </tr>

            </tbody>
        </Table>

<p>Fee entitles the delegates to participate in technical sessions, conference kit, copy of the proceedings, lunch and refreshments on each day of conference. Registration and rest proceedings will be done through the conference website: akgec2022@akgec.ac.in.</p>
            
            </div>
            </div>
            );
        }          
    }
                
              
export default Theme;