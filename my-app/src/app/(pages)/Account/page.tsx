import PagesHeader from "@/components/PagesHeader"

const Account = () => {
    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            {/* Account 1st section Header*/}

            <div>
                <PagesHeader name="Account" title="Account" />
            </div>

            {/* login and sign up section .... */}

            <div className="flex flex-col md:flex-row justify-between md:w-[85%] w-[90%] mx-auto md:py-20 py-10 gap-10">

                {/* Login in Section */}
                <div className="flex flex-col gap-8 md:w-[40%] w-full mx-auto">
                    <h1 className="font-semibold text-4xl">Log In</h1>

                    <form className="flex flex-col gap-7" method="POST">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="text" className="text-base font-medium">
                                Username or email address
                            </label>
                            <input
                                type="text"
                                id="text"
                                name="username"
                                className="mt-1 p-2 border border-[#9F9F9F] md:w-[423px] h-[75px] rounded-[10px]  focus:outline-none"
                                placeholder=""
                                required
                            />
                        </div>


                        <div className="flex flex-col gap-4">
                            <label htmlFor="text" className="text-base font-medium">
                                Password
                            </label>
                            <input
                                type="text"
                                id="text"
                                name="username"
                                className="mt-1 p-2 border border-[#9F9F9F] md:w-[423px] h-[75px] rounded-[10px]  focus:outline-none"
                                placeholder=""
                                required
                            />
                        </div>

                        <div className="flex gap-5 items-center">
                            <p className="w-[30px] h-[27px] border border-[#9F9F9F] rounded-[5px]"></p>
                            <p className="font-normal text-base">Remember me</p>
                        </div>

                        <div className="flex gap-5 items-center">
                       
                        <button
                        type="submit"
                        className="font-normal text-xl w-[215px] h-16 rounded-[15px] border border-black">
                        Log In
                        </button>
                   
                            <p className="font-light text-base">Lost Your Password?</p>
                        </div>
                    </form>

                </div>

                {/* Register */}
                <div className="flex flex-col gap-8 md:w-[40%] w-full mx-auto">
                    <h1 className="font-semibold text-4xl">Register</h1>

                    <form method="POST" className="flex flex-col gap-7">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="text" className="text-base font-medium">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="text"
                                name="username"
                                className="mt-1 p-2 border border-[#9F9F9F] md:w-[423px] h-[75px] rounded-[10px]  focus:outline-none"
                                placeholder=""
                                required
                            />
                        </div>

                         <div className="flex flex-col gap-4 font-light text-base w-full">
                            <p>A link to set a new password will be sent to your email address.</p>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.</p>
                        </div>

                        <div className="flex items-center md:mt-16">
                        <button 
                        type="submit"
                        className="font-normal text-xl w-[215px] h-16 rounded-[15px] border border-black">
                        Register
                        </button>
                
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Account