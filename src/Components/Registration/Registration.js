import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Theme extends Component {

    render() {
        return (
            <div id="registration" className="target mb-5 foothandle">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Registration Fees</h1>

                    {/* <Table bordered > */}

                    <Table bordered>
                        <tbody>
                            <tr>
                                <th>S/N</th>
                                <th>Category</th>
                                <th>Amount (National)</th>
                                <th>Amount (International)</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> For Author/Full Paper Registration (Student - UG, PG & PhD) </td>
                                <td>INR 5000</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> For Author/Full Paper Registration (Academician/Professors/Industry Professional) </td>
                                <td>INR 6000</td>
                                <td>$150</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td> For Abstract/ Oral Presentation/Delegate/Poster Presentation </td>
                                <td>INR 5000</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> Workshop Fees </td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>

                        </tbody>
                    </Table>

                </div>
            </div>
        );
    }
}


export default Theme;