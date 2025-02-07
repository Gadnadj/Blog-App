import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { PostInterface } from "../types";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();


    const addCategory = () => {
        setCats([...cats, cat]);
        setCat("");
    };

    const deleteCategory = (index: number) => {
        setCats(cats.filter((_, i) => i !== index));
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("User:", user);  // Vérifie si l'utilisateur est bien défini
        console.log("Cookies:", document.cookie);  // Vérifie si le token est bien stocké


        if (!user?.username || !user?._id) {
            console.log("User not found, cannot create post");
            return;
        }

        const newPost: PostInterface = {
            title,
            desc,
            username: user.username,
            user_id: user._id,
            categories: cats,
            photo: "",
            updatedAt: new Date(Date.now())  // Définir la date actuelle
        };

        if (file && newPost) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("img", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                const imageUpload = await axios.post(URL + "/api/upload", data, { withCredentials: true });
                console.log(imageUpload.data);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }

        //post upload
        try {
            const res = await axios.post(URL + "/api/post/write", newPost, { withCredentials: true });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <div className="px-6 xl:px-[200px] mt-8">
                <h1 className="font-bold xl:text-2xl text-xl">
                    Create a post
                </h1>

                <form className="w-full flex flex-col gap-4 xl:gap-8 mt-4">

                    {/* add post title */}
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="px-4 py-2 outline-none border-2 border-gray-300 rounded-lg"
                        type="text"
                        placeholder="Enter post title" />

                    {/* add image */}
                    <label className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
                        <span className="text-gray-500">Upload an image</span>
                        <input
                            onChange={(e) => e.target.files && setFile(e.target.files[0])}
                            type="file"
                            className="hidden" />
                    </label>

                    {/* add categories */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 xl:gap-8">
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
                                    <div key={index} className="flex justify-center items-center gap-2 mr-4 bg-gray-200 px-2 py-1 rounded-lg mt-2 w-[30%] xl:w-[10%]">
                                        <p>{item}</p>
                                        <p onClick={() => deleteCategory(index)} className="text-white bg-black rounded-full p-1 text-sm"> <ImCross className="cursor-pointer" /> </p>
                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <textarea
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        rows={15}
                        cols={30}
                        className="px-4 py-2 outline-none border-2 border-gray-300 rounded-lg"
                        placeholder="Enter post description"
                    />

                    <button
                        onClick={(e) => handleCreate(e)}
                        className="bg-black text-white w-full rounded-lg xl:w-[40%] px-4 py-2 mx-auto text-lg xl:text-xl">
                        Create
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreatePost;