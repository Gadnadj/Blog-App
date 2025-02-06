import { PostInterface } from "../types";

type props = {
    post: PostInterface
}

const HomePosts = ({ post }: props) => {
    return (
        <div className="w-full flex-col md:flex md:flex-row mt-8 space-x-2">
            {/* left */}
            <div className="w-[25%] h-[250px] flex justify-center items-center">
                <img src={post.photo} className="h-full w-full object-cover" />
            </div>

            {/* right */}
            <div className="flex flex-col w-[92%] md:w-[65%]">
                <h1 className="text-xl font-bold mb-1 md:mb-2 md:text-2xl">
                    {post.title}
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                    <p>@{post.username}</p>
                    <div className="flex space-x-2">
                        <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>

                <p className="text-sm md:text-lg">{post.desc}</p>
            </div>
        </div>
    );
};

export default HomePosts;