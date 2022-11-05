import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import "./Registration.css"
import { Table } from "react-bootstrap"
import Banner from "../../Components/banner/Banner"
import Main from "../../Components/Registration/Registration"

const Registration = () => {
    return (
        <>
            <Header active="registration" />
            <Main />
            <Footer />
        </>
    )
}

export default Registration
