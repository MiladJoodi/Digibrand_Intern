import { Heart, ReplyAll } from "lucide-react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

const CommentItem = ({ comment }) => {

    return (
        <div className="flex flex-col bg-gray-100 rounded-lg p-4  gap-4">
            {/* top */}
            <div className="flex justify-between">
                <div className="flex gap-2 sm:gap-4 items-center">
                    <p className="font-semibold text-md text-gray-600">{comment.name}</p>
                    <p className="text-xs text-white bg-green-800 px-2 py-[3px] rounded flex justify-center items-center">خریدار</p>
                    <div className="flex gap-2 text-gray-600 text-sm">
                        {comment.date}
                        <BsFillCalendarDateFill className="text-gray-600" />
                    </div>
                </div>

                <button>
                    <BsThreeDotsVertical className="" />
                </button>

            </div>

            {/* content */}
            <p className="text-gray-600">
            {comment.body}
            </p>

            {/* buttons  */}
            <div className="flex items-center justify-end gap-6 text-gray-600">
                <button className="flex items-center gap-1">
                    پاسخ
                    <ReplyAll size={18} className="self-start" />
                </button>
                <button className="flex gap-1">
                    12
                    <Heart size={18} />
                </button>
            </div>

        </div>
    );
}

export default CommentItem;