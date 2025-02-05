import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-full flex justify-center items-center h-[66.6vh]">
            <div className="flex flex-col justify-center items-center gap-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl font-bold">Create an account</h1>
                <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" />
                <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
                <input className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
                <button className="bg-black w-full px-4 py-2 text-lg rounded-full font-bold text-white hover:bg-gray-500 hover:text-black">
                    Register
                </button>
                <div className="flex justify-center items-center gap-1">
                    <p>Already have an account?</p>
                    <p className='text-blue-700 hover:text-blue-500'>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;