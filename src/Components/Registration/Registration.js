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
                                <th>Amount</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> Non-IEEE Professional </td>
                                <td>INR 5000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> IEEE Professional Members </td>
                                <td>INR 4000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td> Non-IEEE Students </td>
                                <td>INR 4000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> IEEE Student Members  </td>
                                <td> INR 3000 </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td> Industry Participants  </td>
                                <td> INR 6000 </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td> Non-IEEE Foreign Participants </td>
                                <td> $ 200 </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td> IEEE Foreign Participants  </td>
                                <td>  $ 150 </td>
                            </tr>

                        </tbody>
                    </Table>

                </div>
            </div>
        );
    }
}


export default Theme;