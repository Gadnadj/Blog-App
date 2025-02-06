import { useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import axios from "axios";
import { URL } from "../url";
import { PostInterface } from "../types";
import { useLocation } from "react-router-dom";


const Home = () => {
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const { search } = useLocation();
    console.log(search);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(URL + "/api/post/" + search);
                setPosts(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, [search]);

    return (
        <>
            <div className='px-8 md:px-[200px] min-h-[80vh]'>
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