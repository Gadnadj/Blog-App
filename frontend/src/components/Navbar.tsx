import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const user = true;
    return (
        <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
            <h1 className='flex text-lg md:text-xl font-extrabold whitespace-nowrap'>
                <Link
                    to={'/'}>
                    Blog Market
                </Link>
            </h1>

            <div className='flex justify-center items-center space-x-0'>
                <p>
                    <BiSearch />
                </p>

                <input
                    className='outline-none px-3'
                    type="text"
                    placeholder='Search a post' />
            </div>

            {
                user ?
                    <div className='flex items-center justify-center space-x-2 md:space-x-4'>
                        <h3><Link to={'/write'}>Write</Link></h3>
                        <h3><Link to={'/profile'}>Profile</Link></h3>
                    </div>

                    :
                    <div className='flex items-center justify-center space-x-2 md:space-x-4'>
                        <h3><Link to={'/login'}>Login</Link></h3>
                        <h3><Link to={'/register'}>Register</Link></h3>
                    </div>
            }

        </div >
    );
};

export default Navbar;