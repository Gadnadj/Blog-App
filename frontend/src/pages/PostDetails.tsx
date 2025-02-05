import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import image1 from "../assets/image1.jpg";



const PostDetails = () => {
    return (
        <div className="md:px-[200px]">
            <div className="px-8  mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">
                        10 Uses of Artificial Intelligence in Day to Day Life
                    </h1>

                    <div className="flex items-center justify-center gap-2">
                        <p> <BiEdit size={25} className="cursor-pointer" /> </p>
                        <p> <MdDelete size={25} className="cursor-pointer" /> </p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@snehasishdev</p>
                    <div className="flex space-x-2">
                        <p>16/06/2024</p>
                        <p>16:45</p>
                    </div>
                </div>

                <img className="w-full  mx-auto mt-8" src={image1} alt="" />

                <p className="text-sm md:text-lg mt-8">
                    Prominent examples of AI software used in everyday life include voice assistants, images rendering...
                    Prominent examples of AI software used in everyday life include voice assistants, images rendering...
                    Prominent examples of AI software used in everyday life include voice assistants, images rendering...
                </p>

                <div className="flex items-center mt-8 gap-4 font-semibold">
                    <p>Categories:</p>

                    <div className="flex justify-center items-center gap-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">
                            Tech
                        </div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">
                            AI
                        </div>
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
                </div>
            </div>

            <div>
                {/* Write a comment */}
                <div className="w-full flex flex-col mt-4 md:flex-row gap-3 px-8">
                    <textarea rows={3} cols={6} className="md:w-[80%] outline-none px-4 mt-4 md:mt-0 border rounded-lg py-2" placeholder="Write a comment" />
                    <button className="bg-black text-white px-4 py-2 md:w-[20%] md:mt-0 rounded-full">Add Comment</button>
                </div>
            </div>

        </div>
    );
};

export default PostDetails;