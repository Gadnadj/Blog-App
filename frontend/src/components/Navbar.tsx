import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;

    return (
        <div className="flex flex-wrap items-center justify-between w-full max-w-screen-lg mx-auto px-4 py-3 md:px-10">
            {/* Logo */}
            <h1 className="text-lg font-extrabold whitespace-nowrap md:text-xl">
                <Link to="/">Blog Market</Link>
            </h1>

            {/* Barre de recherche */}
            <div className="flex items-center gap-2 border rounded-full px-3 py-1 max-w-[120px] md:max-w-[250px] flex-1">
                <BiSearch className="text-gray-500" />
                <input
                    className="w-full outline-none text-sm bg-transparent placeholder-gray-400"
                    type="text"
                    placeholder="Search a post"
                />
            </div>

            {/* Liens utilisateur */}
            <div className="flex items-center gap-3 md:gap-6">
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
        </div>
    );
};

export default Navbar;
