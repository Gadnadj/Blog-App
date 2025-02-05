import { useState } from "react";
import { ImCross } from "react-icons/im";


const EditPost = () => {
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState<string[]>([]);

    console.log(cats);
    const addCategory = () => {
        setCats([...cats, cat]);
        setCat("");
    };

    const deleteCategory = (index: number) => {
        setCats(cats.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="px-6 md:px-[200px] mt-8">
                <h1 className="font-bold md:text-2xl text-xl">
                    Update a post
                </h1>

                <form className="w-full flex flex-col gap-4 md:gap-8 mt-4">

                    {/* add post title */}
                    <input className="px-4 py-2 outline-none border-2 border-gray-300 rounded-lg" type="text" placeholder="Enter post title" />

                    {/* add image */}
                    <label className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
                        <span className="text-gray-500">Upload an image</span>
                        <input type="file" className="hidden" />
                    </label>

                    {/* add categories */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 md:gap-8">
                            <input
                                onChange={(e) => setCat(e.target.value)}
                                value={cat}
                                className="px-4 py-2 border-2 border-gray-300 rounded-lg outline-none"
                                type="text"
                                placeholder="Enter post category" />
                            <div
                                onClick={addCategory}
                                className="bg-black text-white px-4 py-2 font-semibold rounded-lg cursor-pointer">
                                Add
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap mt-2">

                            {
                                cats.map((item, index) => (
                                    <div key={index} className="flex justify-center items-center gap-2 mr-4 bg-gray-200 px-2 py-1 rounded-lg mt-2 w-[30%] md:w-[10%]">
                                        <p>{item}</p>
                                        <p onClick={() => deleteCategory(index)} className="text-white bg-black rounded-full p-1 text-sm"> <ImCross className="cursor-pointer" /> </p>
                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <textarea
                        rows={15}
                        cols={30}
                        className="px-4 py-2 outline-none border-2 border-gray-300 rounded-lg"
                        placeholder="Enter post description"
                    />

                    <button className="bg-black text-white w-full rounded-lg md:w-[40%] px-4 py-2 mx-auto text-lg md:text-xl">
                        Update
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditPost;