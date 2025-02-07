import { useContext, useEffect, useState } from "react";
import ProfilePosts from "../components/ProfilePosts";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { PostInterface } from "../types";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?._id) {
            const fetchUserPosts = async () => {
                try {
                    const res = await axios.get(URL + `/api/post/user/${user._id}`, { withCredentials: true });
                    setPosts(res.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            };
            fetchUserPosts();
        }
    }, [user]);

    return (
        <div>
            <div className="px-8 xl:px-[200px] mt-8 flex lg:flex-row flex-col-reverse lg:gap-44">
                <div className="flex flex-col xl:w-[70%] w-full">
                    <h1 className="text-xl font-bold -mb-4">
                        Your posts
                    </h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <ProfilePosts key={post._id} post={post} />
                        ))
                    ) : (
                        <p className="text-gray-500 mt-8">No posts yet</p>
                    )}
                </div>

                <div className="flex flex-col gap-4 xl:w-[30%] w-full max-xl:mb-8">
                    <h1 className="text-xl font-bold self-">
                        Profile
                    </h1>
                    <input
                        className="outline-none px-4 py-2 border-2 rounded-lg text-gray-500 border-gray-300"
                        type="text"
                        placeholder="Your username"
                        value={user?.username || ""}
                        readOnly
                    />
                    <input
                        className="outline-none px-4 py-2 border-2 rounded-lg text-gray-500 border-gray-300"
                        type="email"
                        placeholder="Your email"
                        value={user?.email || ""}
                        readOnly
                    />
                    <div className="flex gap-4 items-center max-xl:justify-center">
                        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 hover:scale-105 hover:duration-200">Update</button>
                        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-500 hover:scale-105 hover:duration-200">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;