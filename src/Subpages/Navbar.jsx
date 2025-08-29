import { MdOutlineRealEstateAgent } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Navbar = () => {
    const { user } = useContext(UserContext);
    const [navState, setNavState] = useState(false);
    const handleCloseMenu = () => setNavState(false);

    const handleSignOut = () => {
        signOut(auth);
        handleCloseMenu();
    };
    const navlinks = (
        <>
            <li className="text-base font-extralight hover:text-green-600 hover:underline">
                <NavLink to="/" onClick={handleCloseMenu}>Home</NavLink>
            </li>
            <li className="text-base font-extralight hover:text-green-600 hover:underline">
                <NavLink to="/BuyLand" onClick={handleCloseMenu}>Buy Land</NavLink>
            </li>
            <li className="text-base font-extralight hover:text-green-600 hover:underline">
                <NavLink to="/Updateprofile" onClick={handleCloseMenu}>Update Profile</NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full relative">
            <div className="flex justify-between items-center mt-6 mx-7 md:mt-12 md:mx-14 lg:max-w-6xl">
                <div className="flex items-center gap-2">
                    <MdOutlineRealEstateAgent size={40} color="green" />
                    <h3 className="text-3xl font-bold">Land Lord</h3>
                </div>

                <ul className="md:flex gap-6 hidden">
                    {navlinks}
                </ul>

                <div className="md:flex items-center gap-2 hidden">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />
                    ) : (
                        <FaRegUserCircle size={40} color="green" />
                    )}
                    {user ? (
                        <button onClick={handleSignOut} className="text-xl text-green-700 font-bold btn p-4">Sign Out</button>
                    ) : (
                        <p className="text-xl font-medium">
                            <NavLink to="/Login" onClick={handleCloseMenu} className="text-green-700 font-bold">Login</NavLink> /
                            <NavLink to="/Register" onClick={handleCloseMenu} className="text-green-700 font-bold">Register</NavLink>
                        </p>
                    )}
                </div>

                <div
                    className="flex md:hidden cursor-pointer"
                    onClick={() => setNavState(!navState)}
                >
                    {navState ? (
                        <RxCross1 size={32} color="green" />
                    ) : (
                        <AiOutlineMenu size={32} color="green" />
                    )}
                </div>
            </div>

            <div
                className={`md:hidden absolute left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out origin-top
                ${navState ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
            >
                <ul className="text-center space-y-4 py-5">{navlinks}</ul>
                <div className="flex justify-center items-center gap-2 pb-5">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />
                    ) : (
                        <FaRegUserCircle size={28} color="green" />
                    )}
                    {user ? (
                        <button onClick={handleSignOut} className="text-lg font-medium btn p-5">Sign Out</button>
                    ) : (
                        <p className="text-lg font-medium">
                            <NavLink to="/Login" onClick={handleCloseMenu} className="text-green-700 font-bold">Login</NavLink> /
                            <NavLink to="/Register" onClick={handleCloseMenu} className="text-green-700 font-bold">Register</NavLink>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
