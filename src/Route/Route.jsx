import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/Register",
                element: <Register></Register>
            },
            {
                path:"/Updateprofile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
]);

export default router ;