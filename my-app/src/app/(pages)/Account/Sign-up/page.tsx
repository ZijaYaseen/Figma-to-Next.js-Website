import Link from "next/link";

const SignUp = () => {
    return (
        <div className='max-w-[1440px] font-poppins w-full md:mt-[90px] mt-[60px]'>

            <div className="md:w-[85%] w-[90%] mx-auto pb-10">

                {/* Sign Up Section */}
                <div className="flex flex-col gap-8 md:w-[40%] w-full mx-auto">
                    <h1 className="font-semibold text-4xl">Sign Up</h1>

                    <form className="flex flex-col gap-7" method="POST">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="text" className="text-base font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px] focus:outline-none"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="email" className="text-base font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px] focus:outline-none"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="password" className="text-base font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px] focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="confirmPassword" className="text-base font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="mt-1 p-6 border border-[#9F9F9F] md:w-[453px] lg:h-[75px] h-12 rounded-[10px] focus:outline-none"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <div className="flex gap-5 items-center">
                            <button
                                type="submit"
                                className="font-normal text-xl w-[215px] md:h-16 h-14 rounded-[15px] border border-black">
                                Sign Up
                            </button>
                        </div>

                    </form>

                    <div className="flex gap-2">
                        <p className="font-light text-base">Already have an account?</p>
                        <Link href={"/Account/Login"}>
                            <p className="font-light text-base text-blue-600 underline">Log In</p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp;
