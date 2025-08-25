import { Outlet } from "react-router";
import Navbar from "../Subpages/Navbar";

const Root = () => {
    return (
        <div className="primary_Font max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;