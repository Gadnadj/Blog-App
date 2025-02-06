import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import MenuMobile from "./MenuMobile";
import { UserContext } from "../context/UserContext";



const Navbar = () => {

    const [prompt, setPrompt] = useState("");
    const [menu, setMenu] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(prompt);
    const showMenu = () => {
        setMenu(!menu);
    };


    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">

            <h1 className="text-lg md:text-xl font-extrabold">
                <Link to="/">
                    Blog Market
                </Link>
            </h1>

            <div className="flex justify-center items-center space-x-0 relative">
                <p
                    onClick={() => navigate(prompt ? `?search=${prompt}` : "/")}
                    className="cursor-pointer ">
                    <BsSearch className="absolute right-1 top-1" size={20} />
                </p>

                <input
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    className="outline-none px-6 border-1 rounded-full"
                    placeholder="Search a post"
                    type="text" />
            </div>

            <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
                {
                    user ?
                        <h3>
                            <Link to="/write">
                                Write
                            </Link>
                        </h3>
                        :
                        <h3>
                            <Link to="/login">
                                Login
                            </Link>
                        </h3>}

                {
                    user
                        ?
                        <div onClick={showMenu}>
                            <p className="cursor-pointer relative">
                                <FaBars />
                            </p>
                            {menu && <MenuMobile />}
                        </div>
                        :
                        <h3>
                            <Link to="/register">
                                Register
                            </Link>
                        </h3>}

            </div>
            <div onClick={showMenu} className="md:hidden text-lg">
                <p className="cursor-pointer relative">
                    <FaBars />
                </p>
                {menu && <MenuMobile />}
            </div>

        </div>
    );
};

export default Navbar; 