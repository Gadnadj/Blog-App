import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

type Props = {}

const Comments = (props: Props) => {
    return (
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
    );
};

export default Comments;