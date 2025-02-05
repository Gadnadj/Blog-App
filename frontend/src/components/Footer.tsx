const Footer = () => {
    return (
        <>
            <div className='mt-8 w-full bg-black px-8 md:px-[500px] flex flex-col gap-5 md:gap-0 md:flex-row justify-between text-sm md:text-md py-8 '>
                <div className='flex flex-col gap-1 md:gap-8'>
                    <p className='text-white'>Featured Blogs</p>
                    <p className='text-white'>Most Viewed</p>
                    <p className='text-white'>Readers Choice</p>
                </div>

                <div className='flex flex-col gap-1 md:gap-8'>
                    <p className='text-white'>Forum</p>
                    <p className='text-white'>Support</p>
                    <p className='text-white'>Recent Posts</p>
                </div>

                <div className='flex flex-col gap-1 md:gap-8'>
                    <p className='text-white'>Privacy Policy</p>
                    <p className='text-white'>About Us</p>
                    <p className='text-white'>Recent Posts</p>
                </div>
            </div>
            <p className='py-2 pb-2 text-center text-white bg-black'>All rights reserved @Blog Market 2025</p>
        </>
    );
};

export default Footer;