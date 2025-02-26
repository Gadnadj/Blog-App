

const Footer = () => {
    return (
        <>
            <div className="mt-8 w-full bg-black px-8 xl:px-[300px] flex xl:flex-row flex-col space-y-6 xl:space-y-0 items-start xl:justify-between text-sm xl:text-md py-8 gap-10">
                <div className="flex flex-col text-white gap-4">
                    <p>Featured Blogs</p>
                    <p>Most viewed</p>
                    <p>Readers Choice</p>
                </div>

                <div className="flex flex-col text-white gap-4">
                    <p>Forum</p>
                    <p>Support</p>
                    <p>Recent Posts</p>
                </div>

                <div className="flex flex-col text-white gap-4">
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                    <p>Terms of Service</p>
                </div>
            </div>
            <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Blog Market 2025</p>
        </>

    );
};

export default Footer;