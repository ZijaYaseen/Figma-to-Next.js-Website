
import Link from "next/link"

const Login = () => {
    return (
        <div className='max-w-[1440vw] font-poppins w-full md:mt-[90px] mt-[60px]' >

            <div className="md:w-[85%] w-[90%] mx-auto pb-10">

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
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
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
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px]  focus:outline-none"
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
                        className="font-normal text-xl w-[215px] md:h-16 h-14 rounded-[15px] border border-black">
                        Log In
                        </button>
                   
                            <Link href={"/Account/Register"}>
                            <p className="font-light md:text-base text-xs text-blue-600 underline">Lost Your Password?</p>
                            </Link>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Login