import Header from "../../Components/Header/Header"
import { Table } from "react-bootstrap"
import Banner from "../../Components/banner/Banner"
import Footer from "../../Components/Footer/Footer"


const Award = () => {
    return (
        <>
            <Header active="accomodation" />

            <div id="call" className="target mb-5 foothandle">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Accomodation</h1>
                    <p>Participants will make their own arrangements for travel, boarding, lodging etc. However, limited accommodation facility may be provided to the participants in hostels and guest rooms of the institute on special request. For lady participants’ accommodation shall be arranged in the Girls hostels of the institute, on request. For guests, the accommodation shall be arranged by our Institute.
                    </p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Award