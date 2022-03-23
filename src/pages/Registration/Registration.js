import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./Registration.css"
import { Table } from "react-bootstrap"
import Banner from "../../components/banner/Banner"
import Main from "../../components/Registration/Registration"

const Registration = () => {
    return(
        <>
        <Header active="registration" />
        <Main/>
        <Footer />
        </>
    )
}

export default Registration
