import Header from "../../components/Header/Header"
import { Table } from "react-bootstrap"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"


const Award = () => {
    return(
        <>
        <Header active="accomodation" />

        <div id="call" className="target mb-5">
            <div className="container" >
            <h1 className="mb-3 green-heading">Accomodation</h1>
            <p>For accomodation, the guests will be granted the option of Hotels near Ghaziabad.</p>
            <br/>
            <ul>
              <li>Red Velvet Hotel</li>
              <li>Pandey Hotel</li>
            </ul>
            </div>
            </div>
<Footer />
        </>
    )
}

export default Award