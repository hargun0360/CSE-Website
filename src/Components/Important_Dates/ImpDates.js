import React from 'react'
import { Table } from "react-bootstrap";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
const ImpDates = () => {
  return (<>
   <Header active="dates" />
    <div className="container" >
    <h1 className="mt-5 mb-3 green-heading">Important Dates</h1>

    {/* <Table bordered > */}

    <Table bordered >
      <tbody>
        <tr>

          <td> Paper Submission open </td>
          <td>April 1, 2023</td>



        </tr>
        <tr>
          <td>Paper Submission due </td>
          <td> October 30, 2023 </td>
        </tr>
        <tr>
          <td>Acceptance Notification due </td>
          <td> November 30, 2023 </td>
        </tr>
        <tr>
          <td>Workshop Proposal due </td>
          <td> November 30, 2023 </td>
        </tr>

        <tr>
          <td>Camera Ready Paper due   </td>
          <td>December 31, 2023</td>
        </tr>

        <tr>
          <td>Registration due  </td>
          <td>December 31, 2023</td>
        </tr>

        <tr>
          <td>Conference dates </td>
          <td >February 9-10, 2024</td>
        </tr>
      </tbody>
    </Table>


  </div>
  <Footer />
  </>)
}

export default ImpDates