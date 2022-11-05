import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Footer from '../Footer/Footer';

class Theme extends Component {

    render() {
        return (
            <div id="budget" className="mt-5 budgetbg mb-0">
                <div className="greenline mb-5"></div>
                <div className="container" >
                    <h1 className="display-5 bold-text text-center">AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD</h1>
                    <h5 className="greytext mt-3 mb-4 text-center">DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING</h5>
                    <h6 className="bold-text text-center">Proposed Tentative budget for the 1st International conference on Advancements & Key Challenges in Green Energy and Computing (&nbsp;AKGEC&nbsp;-&nbsp;2022&nbsp;)</h6>

                    <Table borderless className="mt-5 budget-btm" responsive="md">
                        <tbody>
                            <tr className="budget-table-head">
                                <th className="tdborderbudget">Item/Activity</th>
                                <th className="tdborderbudget">Quantity</th>
                                <th className="tdborderbudget">Cost Expected (INR)</th>
                                <th className="tdborderbudget">Total (INR)</th>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Pre Conference Publication (Brochure, Poster & TA against Advertisement)</td>
                                <td className="tdborderbudget"> </td>
                                <td className="tdborderbudget"> </td>
                                <td className="tdborderbudget">15000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Conference Kits</td>
                                <td className="tdborderbudget">150</td>
                                <td className="tdborderbudget">600</td>
                                <td className="tdborderbudget">90000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Conference Proceedings (Publication House Fee)</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">100000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Logistics - Keynote and session chair (Incl. Boarding & lodging, TA & Remuneration)</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">300000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Fooding, Boarding & Lodging (Participants, Organizers, Volunteers & Guests)</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">High Tea</td>
                                <td className="tdborderbudget">125 x 2</td>
                                <td className="tdborderbudget">60</td>
                                <td className="tdborderbudget">15000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Lunch</td>
                                <td className="tdborderbudget">125 x 2</td>
                                <td className="tdborderbudget">150</td>
                                <td className="tdborderbudget">37500</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Tea</td>
                                <td className="tdborderbudget">125 x 2</td>
                                <td className="tdborderbudget">50</td>
                                <td className="tdborderbudget">12500</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Networking Dinner (Optional)</td>
                                <td className="tdborderbudget">25</td>
                                <td className="tdborderbudget">2000</td>
                                <td className="tdborderbudget">50000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Other Expenditures</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Decoration</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">5000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Flex</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">3000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Delegates cards, invitation cards</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">3000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Memento</td>
                                <td className="tdborderbudget">30</td>
                                <td className="tdborderbudget">1000</td>
                                <td className="tdborderbudget">30000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Registration form/envelope</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">1000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Certificates</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">3000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget">Misc.(water bottle, pens , pads etc)</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">20000</td>
                            </tr>

                            <tr>
                                <td className="tdborderbudget bold-text right-text pe-3">Grand Total(in INR)</td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget"></td>
                                <td className="tdborderbudget">6,85,000</td>
                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 budget-btm">
                        <tbody>
                            <tr>
                                <th className="noborder">Revenue Collection</th>
                                {/* <th className="noborder">Patron</th> */}
                            </tr>
                            <tr>
                                <td className="tdborderequal tdborderbudget"> Expected Registration & Sponsorship</td>
                                <td className="tdborderequal tdborderbudget">500000</td>
                            </tr>
                            <tr>
                                <td className="tdborderequal tdborderbudget bold-text right-text pe-3">Grand Total(in INR)</td>
                                <td className="tdborderequal tdborderbudget">500000</td>
                            </tr>

                        </tbody>
                    </Table>

                    <p>Difference amount of <span className="bold-text">Rs. 185,000/-</span> is proposed for the conference.
                        <br /><br />
                        You are requested to kindly approve the budget.</p>
                    <br />
                    <div className="bold-text mb-0">
                        Regards,<br />

                        Dr. Hemant Ahuja  <br />
                        HoD EN
                    </div>
                    <br />
                    <br />
                    <br />


                </div>
                <Footer />
            </div>
        );
    }
}



export default Theme;