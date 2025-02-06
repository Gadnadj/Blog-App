import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";

const MenuMobile = () => {


    const { setUser, user } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            await axios.get(URL + "/api/user/logout", { withCredentials: true });
            setUser(null);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-400 w-[200px] flex flex-col items-start absolute top-7 right-0 gap-4 rounded-md p-4">

            <div className="relative w-full py-0">
                <IoMdClose
                    className="absolute top-0 right-0 cursor-pointer" />
            </div>
            {
                user ? (
                    <>
                        <h3 className="text-white text-lg hover:text-black cursor-pointer">
                            <Link to="/write">
                                Write
                            </Link>
                        </h3>

                        <h3 className="text-white text-lg hover:text-black cursor-pointer">
                            <Link to="/profile/:id">
                                Profile
                            </Link>
                        </h3>

                        <h3 className="text-white text-lg hover:text-black cursor-pointer">
                            <Link to="/blog">
                                My Blogs
                            </Link>
                        </h3>

                        <h3
                            onClick={handleLogout}
                            className="text-white text-lg hover:text-black cursor-pointer">
                            <Link to="/login">
                                Logout
                            </Link>
                        </h3>
                    </>
                ) : (
                    <>
                        <h3 className="text-white text-lg hover:text-black cursor-pointer" >
                            <Link to="/login">
                                Login
                            </Link>
                        </h3>

                        <h3 className="text-white text-lg hover:text-black cursor-pointer">
                            <Link to="/register">
                                Register
                            </Link>
                        </h3>
                    </>
                )
            }

        </div >
    );
};

export default MenuMobile;