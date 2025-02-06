import ProfilePosts from "../components/ProfilePosts";


const Profile = () => {
    return (
        <div>
            <div className="px-8 xl:px-[200px] mt-8 flex lg:flex-row flex-col-reverse lg:gap-44">
                <div className="flex flex-col xl:w-[70%] w-full">
                    <h1 className="text-xl font-bold -mb-4">
                        Your posts
                    </h1>
                    <ProfilePosts />
                    <ProfilePosts />
                    <ProfilePosts />
                    <ProfilePosts />
                </div>

                <div className="flex flex-col gap-4 xl:w-[30%] w-full max-xl:mb-8">
                    <h1 className="text-xl font-bold self-">
                        Profile
                    </h1>
                    <input className="outline-none px-4 py-2 border-2 rounded-lg text-gray-500 border-gray-300" type="text" placeholder="Your username" />
                    <input className="outline-none px-4 py-2 border-2 rounded-lg text-gray-500 border-gray-300" type="email" placeholder="Your email" />
                    <input className="outline-none px-4 py-2 border-2 rounded-lg text-gray-500 border-gray-300" type="password" placeholder="Your password" />
                    <div className="flex gap-4 items-center max-xl:justify-center">
                        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 hover:scale-105 hover:duration-200 ">Update</button>
                        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 hover:scale-105 hover:duration-200">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;