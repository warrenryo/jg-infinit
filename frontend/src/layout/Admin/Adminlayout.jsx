import { Outlet } from "react-router-dom"
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
export const Adminlayout = () => {

    return(<>

    <Header/>
    <div>
    <Outlet/>
    </div>

    <Footer/>
    
    </>)
}