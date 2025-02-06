import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../url";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(URL + "/api/user/register", { username, email, password });
            setUsername("");
            setEmail("");
            setPassword("");
            setError(false);
            navigate("/login");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <div className="w-full flex justify-center items-center h-[66.6vh]">
            <div className="flex flex-col justify-center items-center gap-4 w-[80%] xl:w-[25%]">
                <h1 className="text-xl font-bold">Create an account</h1>
                <input
                    className="w-full px-4 py-2 border-2 border-black outline-0"
                    type="text"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />


                <input
                    className="w-full px-4 py-2 border-2 border-black outline-0"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <input
                    className="w-full px-4 py-2 border-2 border-black outline-0"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <button
                    onClick={(e) => handleSubmit(e)}
                    className="bg-black w-full px-4 py-2 text-lg rounded-full font-bold text-white hover:bg-gray-500 hover:text-black">
                    Register
                </button>

                {
                    error && (
                        <h3 className="text-red-500 text-sm">Something went wrong</h3>
                    )
                }

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