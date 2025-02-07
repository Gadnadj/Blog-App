import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../components/Comments";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL, IF } from "../url";
import { PostInterface } from "../types";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";



const PostDetails = () => {
    const [post, setPost] = useState<PostInterface>();
    const [loader, setLoader] = useState(false);
    const postId = useParams().id;
    const { user } = useContext(UserContext);


    useEffect(() => {
        setLoader(true);
        const fetchPost = async () => {
            const res = await axios.get(URL + `/api/post/${postId}`);
            setPost(res.data);
            setLoader(false);
        };

        fetchPost();
    }, [postId]);

    return (
        <div className="xl:px-[200px]">
            {
                loader ?
                    (
                        <div className="h-[40vh] flex justify-center items-center">
                            <Loader />
                        </div>
                    ) :
                    (
                        <>
                            <div className="px-8  mt-8">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-2xl font-bold text-black xl:text-3xl">
                                        {post?.title}
                                    </h1>

                                    {
                                        user?._id === post?.user_id ?
                                            (
                                                <div className="flex items-center justify-center gap-2">
                                                    <p> <BiEdit size={25} className="cursor-pointer" /> </p>
                                                    <p> <MdDelete size={25} className="cursor-pointer" /> </p>
                                                </div>
                                            ) :
                                            ("")
                                    }


                                </div >

                                <div className="flex items-center justify-between mt-2 xl:mt-4">
                                    <p>@{post?.username}</p>
                                    <div className="flex space-x-2">
                                        <p>{post?.updatedAt ? new Date(post.updatedAt).toString().slice(0, 15) : ""}</p>
                                        <p>{post?.updatedAt ? new Date(post.updatedAt).toString().slice(15, 24) : ""}</p>
                                    </div>
                                </div>

                                <img className="w-full xl:w-[80%] xl:h-[600px] mx-auto mt-8 object-cover" src={IF + post?.photo} alt="" />

                                <p className="text-sm xl:text-lg mt-8">
                                    {post?.desc}
                                </p>

                                <div className="flex items-center mt-8 gap-4 font-semibold">
                                    <p>Categories:</p>

                                    <div className="flex justify-center items-center gap-2">
                                        {
                                            post?.categories.map((item, index) => (
                                                <div key={index} className="bg-gray-300 rounded-lg px-3 py-1">
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-col mt-4 gap-4">
                                    <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>

                                    {/* comment */}
                                    <div className="px-2 py-2 bg-gray-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-gray-600">@snehasish</h3>
                                            <div className="flex justify-center items-center gap-4">
                                                <p className="text-gray-500 text-sm">16/06/2024</p>
                                                <p className="text-gray-500 text-sm">16:45</p>

                                                <div className="flex items-center justify-center gap-2">
                                                    <p> <BiEdit className="cursor-pointer" /></p>
                                                    <p> <MdDelete className="cursor-pointer" /></p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-2">
                                            Nice Information Dude
                                        </p>
                                    </div>

                                    {/* comment */}
                                    <Comments />
                                </div>
                            </div >

                            <div>
                                {/* Write a comment */}
                                <div className="w-full flex flex-col mt-4 xl:flex-row gap-3 px-8">
                                    <textarea rows={3} cols={6} className="xl:w-[80%] outline-none px-4 mt-4 xl:mt-0 border rounded-lg py-2" placeholder="Write a comment" />
                                    <button className="bg-black text-white px-4 py-2 xl:w-[20%] xl:mt-0 rounded-full">Add Comment</button>
                                </div>
                            </div>
                        </>
                    )
            }


        </div >
    );
};

export default PostDetails;