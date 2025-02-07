import { useNavigate } from "react-router-dom";
import { PostInterface } from "../types";
import { IF } from "../url";

type props = {
    post: PostInterface
}


const ProfilePosts = ({ post }: props) => {

    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate(`/posts/post/${post._id}`); }} className="cursor-pointer w-full flex-col xl:flex xl:flex-row mt-8 space-x-2">
            {/* left */}
            <div className="w-[35%] h-[200px] flex justify-center items-center">
                <img src={IF + post.photo} className="h-full w-full object-cover" />
            </div>

            {/* right */}
            <div className="flex flex-col w-[92%] xl:w-[65%]">
                <h1 className="text-xl font-bold mb-1 xl:mb-2 xl:text-2xl">
                    {post.title}
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between xl:mb-4">
                    <p>@{post.username}</p>
                    <div className="flex space-x-2">
                        <p className="text-gray-500 text-sm">{new Date(post.updatedAt).toString().slice(4, 15)}</p>
                        <p className="text-gray-500 text-sm">{new Date(post.updatedAt).toString().slice(15, 24)}</p>
                    </div>
                </div>

                <p className="text-sm xl:text-lg">{post.desc}</p>
            </div>
        </div>
    );
};

export default ProfilePosts;