import CommentItem from "./CommentItem";

const Comments = () => {
    return (
        <div className="flex flex-col bg-white rounded-xl p-4 gap-4">
            <h4 className="text-emerald-500 text-lg font-bold">دیدگاه های ثبت شده</h4>
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    );
}

export default Comments;