import { Outlet } from "react-router";
import Navbar from "../Subpages/Navbar";
import Footer from "../Subpages/Footer";

const Root = () => {
    return (
        <div>
            <div className="primary_Font max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;