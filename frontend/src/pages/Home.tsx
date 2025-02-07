import { useContext, useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import axios from "axios";
import { URL } from "../url";
import { PostInterface } from "../types";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";


const Home = () => {
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const { search } = useLocation();
    const [loader, setLoader] = useState(false);
    const { user } = useContext(UserContext);

    console.log(user);

    useEffect(() => {
        setLoader(true);
        const fetchPosts = async () => {
            try {
                const res = await axios.get(URL + "/api/post/" + search);
                setPosts(res.data);
                setLoader(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, [search]);

    return (
        <>
            <div className='px-8 xl:px-[200px] min-h-[80vh]'>
                {
                    loader ? (
                        <div className="h-[40vh] flex justify-center items-center">
                            <Loader />
                        </div>
                    ) : (
                        posts.length === 0 ? (
                            <div className="flex items-center justify-center h-[80vh]">
                                <p className="text-xl font-semibold">No result</p>
                            </div>
                        ) : (
                            posts.map((post) => (
                                <Link key={post._id} to={user ? `/posts/post/${post._id}` : "login"}>
                                    <HomePosts post={post} />
                                </Link>
                            ))
                        )
                    )
                }
            </div>
        </>
    );
};

export default Home;