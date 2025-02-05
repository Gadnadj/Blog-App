import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const user = false;

    const showMenu = () => {
        setMenu(true);
    };

    return (
        <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-3 md:px-10">
            {/* Logo */}
            <h1 className="text-lg font-extrabold whitespace-nowrap md:text-xl">
                <Link to="/">Blog Market</Link>
            </h1>

            {/* Barre de recherche */}
            <div className="flex items-center gap-2 border rounded-full px-3 py-1 max-w-[150px] md:max-w-[250px] flex-1">
                <BiSearch className="text-gray-500" />
                <input
                    className="w-full outline-none text-sm bg-transparent placeholder-gray-400"
                    type="text"
                    placeholder="Search a post"
                />
            </div>

            {/* Liens utilisateur */}
            <div className="hidden md:flex items-center justify-center gap-2 md:gap-4">
                {user ? (
                    <>
                        <Link className="text-sm md:text-lg" to="/write">Write</Link>
                        <Link className="text-sm md:text-lg" to="/profile">Profile</Link>
                    </>
                ) : (
                    <>
                        <Link className="text-sm md:text-lg" to="/login">Login</Link>
                        <Link className="text-sm md:text-lg" to="/register">Register</Link>
                    </>
                )}
            </div>

            <div
                onClick={showMenu}
                className="text-lg relative">
                <p>
                    <FaBars className="cursor-pointer"/>
                </p>
                {
                    menu && <MenuMobile setMenu={setMenu} />
                }
            </div>
        </div>
    );
};

export default Navbar;
