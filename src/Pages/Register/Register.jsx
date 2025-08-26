import { useState } from "react";
import registerImg from "../../assets/49240206db9cc699bf42fd23ab2f73827cdfaaf0.png"
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router";
const Register = () => {
    const [eyes , setEyes] = useState(true);

    const handleRegisterSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name");
        const photo = formData.get("photo");
        const email = formData.get("email")
        const pass = formData.get("password")
        console.log(name , photo , email , pass)
    }
    return (
        <div className="flex items-center justify-between">
            <div >
                <img src={registerImg} alt="" />
            </div>
            <div className="w-3/4">
                <form onSubmit={handleRegisterSubmit}>
                    <fieldset className="fieldset">
                        <label className="label text-[#000000] font-semibold text-base">Enter Your Name</label>
                        <input type="text" className="input w-4/5 bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-[18px] py-[18px]  text-[#00000042] text-[13px]" name="name" placeholder="Name" required/>
                        <label className="label text-[#000000] font-semibold text-base">Enter Your PhotoURL</label>
                        <input type="text" className="input w-4/5 bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-[18px] py-[18px]  text-[#00000042] text-[13px]" placeholder="Name" name="photo" required/>
                        <label className="label text-[#000000] font-semibold text-base">Email Address</label>
                        <input type="email" className="input w-4/5 bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-[18px] py-[18px] text-[#00000042  text-[13px]" placeholder="Email" name="email" required />
                        <div className="">
                            <div>
                                <label className="label text-[#000000] font-semibold text-base block mb-2">Password</label>
                                <input type={eyes ? "password" : "text"} className="input w-4/5 bg-[#E8E8E8D9] border-[#7E7A7A24] rounded-lg px-[18px] py-[18px] text-[#00000042  text-[13px]" placeholder="Password" name="password" required/>
                            </div>
                            <div className="relative left-3/4 -top-8" onClick={()=>setEyes(!eyes)}>
                                {
                                    eyes ? <IoIosEye size={24} color="gray"></IoIosEye> : <IoIosEyeOff size={24} color="gray"></IoIosEyeOff>
                                }
                            </div>
                        </div>
                        <input type="submit" value="Register" className="btn btn-neutral w-4/5 bg-green-600 border-none" />
                    </fieldset>
                </form>
                <p className="text-sm mt-4">Already Have An Account ? Please <Link className="text-green-600 link font-bold" to='/Login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;