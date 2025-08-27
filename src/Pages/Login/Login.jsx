import { useContext, useState } from "react";
import registerImg from "../../assets/49240206db9cc699bf42fd23ab2f73827cdfaaf0.png";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { Link } from "react-router";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { UserContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [eyes, setEyes] = useState(true);
    const [error, setError] = useState("");
    const {signInUser , signInGoogle} = useContext(UserContext)
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const pass = formData.get("password");
        setError("")
        signInUser(email , pass)
        .then(result =>{
            console.log(result.user)
        })
        .catch(err =>{
            setError(err.code)
        })
    };

    const handleSignInGoogle = () =>{
        signInGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(err =>{
            setError(err.code)
        })
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-12 gap-10">
            <div className="flex justify-center w-full lg:w-1/2">
                <img src={registerImg} alt="" className="max-w-xs lg:max-w-md" />
            </div>
            <div className="w-full lg:w-1/2 max-w-lg">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <fieldset className="fieldset space-y-4">
                        <label className="label text-[#000000] font-semibold text-base">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="input w-full bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-4 py-3 text-[#00000042] text-[13px]"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <div>
                            <label className="label text-[#000000] font-semibold text-base block mb-2">
                                Password
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={eyes ? "password" : "text"}
                                    className="input w-full bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-4 py-3 text-[#00000042] text-[13px]"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                                <span
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => setEyes(!eyes)}
                                >
                                    {eyes ? (
                                        <IoIosEye size={24} color="gray" />
                                    ) : (
                                        <IoIosEyeOff size={24} color="gray" />
                                    )}
                                </span>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-neutral w-full bg-green-600 border-none text-white font-semibold py-2 rounded-lg"
                        />
                    </fieldset>
                </form>
                <p className="text-sm mt-4 text-center">
                    Don't Have An Account? Please{" "}
                    <Link className="text-green-600 font-bold" to="/Register">
                        Register
                    </Link>
                </p>
                <div className="flex gap-6 items-center justify-center mt-6 bg-gray-200 p-4 rounded-lg w-full">
                    <FaGoogle onClick={handleSignInGoogle} size={28} className="text-green-600 cursor-pointer" />
                    <FaFacebook size={28} className="text-blue-600 cursor-pointer" />
                    <FaGithub size={28} className="text-black cursor-pointer" />
                </div>
                <p className="text-red-700 text-sm font-bold text-center mt-5">
                    {error && error}
                </p>
            </div>
        </div>
    );
};

export default Login;
