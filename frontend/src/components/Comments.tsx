import { MdDelete } from "react-icons/md";
import { CommentInterface } from "../types";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";



type Props = {
    item: CommentInterface,
    handleCommentDelete: (id: string) => void
}

const Comments = ({ item, handleCommentDelete }: Props) => {

    const { user } = useContext(UserContext);

    return (
        <div className="px-2 py-2 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@{item.author}</h3>
                <div className="flex justify-center items-center gap-4">
                    <p className="text-gray-500 text-sm">{new Date(item.updatedAt).toString().slice(4, 15)}</p>
                    <p className="text-gray-500 text-sm">{new Date(item.updatedAt).toString().slice(15, 24)}</p>

                    <div className="flex items-center justify-center gap-2">

                        {
                            user?._id === item.user_id && (
                                <p>
                                    <MdDelete
                                        onClick={() => { item._id && handleCommentDelete(item._id); }}
                                        className="cursor-pointer" />
                                </p>
                            )
                        }
                    </div>
                </div>
            </div >

            <p className="mt-2">
                {item.comment}
            </p>
        </div >
    );
};

export default Comments;