"use client";

import Link from "next/link"
import { FormEvent, useState } from "react"
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        setError(""); // reset error

        try{
           const res = await fetch('/api/account/login', {
            method : "POST",
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify({email, password})
           });

           const data = await res.json()
        //    console.log(data);
           

           if(!res.ok){
            setError(data.error || "Invalid Email or Password");
            return; // Agar error hai to aage ka code na chale
            
           };

           // Token sirf tab save karo jab response OK ho
        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "/Dashboard";
        } else {
            setError("Login failed, please try again.");
        }
        }

        catch(error){
            setError("Something went wrong");
        }
    }

    return (
        <div className='max-w-[1440px] font-poppins w-full md:mt-[90px] mt-[60px]' >

            <div className="md:w-[85%] w-[80%] mx-auto pb-10">

                {/* Login in Section */}
                <div className="flex flex-col gap-8 md:w-[40%] w-full mx-auto">
                    <h1 className="font-semibold text-4xl">Log In</h1>
 
                   {/* Show error meg if login fails */}
                   {error && <p className="text-red-500">{error}</p> }
                    <form className="flex flex-col gap-7" onSubmit={handleLogin}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="text" className="text-base font-medium">
                                Enter Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                placeholder=""
                                required
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label htmlFor="text" className="text-base font-medium">
                                Password
                            </label>
                            <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="text"
                                name="username"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-6 border border-[#9F9F9F] w-full md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
                                placeholder=""
                                required
                            />
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute inset-y-0 md:right-14 right-4 flex items-center text-gray-500 focus:outline-none"
                            >
                                {showPassword? < PiEyeThin size={24}/> : <PiEyeSlashThin size={24} />}
                            </button>
                            </div>

                            <Link href={"/Account/Register"}>
                            <p className="font-light md:text-base text-xs text-blue-600 underline">Forgot Your Password?</p>
                            </Link>
                        </div>
                        
                        <div className="grid gap-4">
                        <button
                        type="submit"
                        className="font-normal text-xl w-[215px] md:h-16 h-14 rounded-[15px] border border-black">
                        Log In
                        </button>
                          
                          <Link href={"/Account/Sign-up"} className="">
                           Don't you have an accoun? <span className="border-b text-base w-36 text-blue-600 border-blue-600">Sign Up</span>
                          </Link>
                          </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login