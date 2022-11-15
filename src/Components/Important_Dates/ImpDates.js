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

          <td>Full Paper Submission due </td>
          <td>May 31, 2023</td>



        </tr>
        <tr>
          <td>Acceptance Notification due </td>

          <td>June 22, 2023</td>



        </tr>
        <tr>
          <td>Camera Ready Paper due   </td>
          <td>July 22, 2023</td>
        </tr>

        <tr>
          <td>Workshop proposal due   </td>
          <td>July 31, 2022</td>
        </tr>

        <tr>
          <td>Registration due  </td>
          <td>August 22, 2023</td>
        </tr>

        <tr>
          <td>Conference Date </td>
          <td >September 22-23, 2023</td>
        </tr>
      </tbody>
    </Table>


  </div>
  <Footer />
  </>)
}

export default ImpDates