import { useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import axios from "axios";
import { URL } from "../url";
import { PostInterface } from "../types";


const Home = () => {
    const [posts, setPosts] = useState<PostInterface[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(URL + "/api/post/");
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <div className='px-8 md:px-[200px]'>
                {
                    posts.map((post) => (
                        <HomePosts post={post} key={post._id} />
                    ))
                }
            </div>
        </>
    );
};

export default Home;