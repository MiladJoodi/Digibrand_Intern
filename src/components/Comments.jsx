import CommentItem from "./CommentItem";

async function getData(){
    const res = await fetch("https://mocki.io/v1/9cc0332b-e139-4936-9a21-e55ab93db6bf")
    return res.json();
}


const Comments = async () => {

    const data = await getData();
    // console.log(data)

    return (
        <div className="flex flex-col bg-white rounded-xl p-4 gap-4">
            <h4 className="text-emerald-500 text-lg font-bold">دیدگاه های ثبت شده</h4>
            {data.map((comment)=> (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

export default Comments;