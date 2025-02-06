import image1 from "../assets/image1.jpg";

const ProfilePosts = () => {
    return (
        <div className="w-full flex-col xl:flex xl:flex-row mt-8 space-x-2">
            {/* left */}
            <div className="w[35%] h-[200px] flex justify-center items-center">
                <img src={image1} className="h-full w-full object-cover" />
            </div>

            {/* right */}
            <div className="flex flex-col w-[92%] xl:w-[65%]">
                <h1 className="text-xl font-bold mb-1 xl:mb-2 xl:text-2xl">
                    10 Uses of Artificial Intelligence in Day to Day Life
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between xl:mb-4">
                    <p>@snehasishdev</p>
                    <div className="flex space-x-2">
                        <p>16/06/2024</p>
                        <p>16:45</p>
                    </div>
                </div>

                <p className="text-sm xl:text-lg">Prominent examples of AI software used in everyday life include voice assistants, images rendering... Prominent examples of AI software used in everyday life include voice assistants, images rendering... Prominent examples of AI software used in everyday life include voice assistants, images rendering...</p>
            </div>
        </div>
    );
};

export default ProfilePosts;