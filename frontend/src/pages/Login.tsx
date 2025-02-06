import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(URL + "/api/user/login", { email, password }, { withCredentials: true });
            setUser(res.data);
            navigate("/");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full flex justify-center items-center h-[66.6vh]">
            <div className="flex flex-col justify-center items-center gap-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl font-bold">Log in to your account</h1>
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
                    value={password}
                />

                <button
                    onClick={(e) => handleSubmit(e)}
                    className="bg-black w-full px-4 py-2 text-lg rounded-full font-bold text-white hover:bg-gray-500 hover:text-black">Login</button>
                <div className="flex justify-center items-center gap-1">
                    <p>New here?</p>
                    <p className='text-blue-700 hover:text-blue-500'>
                        <Link to={"/register"}>
                            Register
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;