"use client"
import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { Button } from "./ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Comments = () => {

    const [comments, setComments] = useState([]);
    const [visible, setVisible] = useState(3);
    const [loading, setLoading] = useState(true)

    // Sleep function
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => {
        setLoading(true)
        fetch("https://mocki.io/v1/9cc0332b-e139-4936-9a21-e55ab93db6bf")
            .then((res) => res.json())
            .then((data) => {
                setComments(data)
                setLoading(false)
            }
            )
        
    }, [])

    // Show more function
    const showMore = async () => {
        setLoading(true)
        await sleep(2000)
        setVisible((prev) => prev + 3)
        setLoading(false)
    }


    return (
        <div className="flex flex-col bg-white rounded-xl p-4 gap-4">
            <h4 className="text-emerald-500 text-lg font-bold">دیدگاه های ثبت شده</h4>
            {comments.slice(0, visible).map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
            <Button onClick={showMore} className="mb-8" >
                {loading ? 
                (<AiOutlineLoading3Quarters size={18} className="animate-spin" />) 
                : 
                ("مشاهده بیشتر")}
            </Button>
        </div>
    );
}

export default Comments;