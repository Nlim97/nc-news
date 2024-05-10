import { deleteComment } from "../utils/api";
import { useState } from "react";
function CommentCard({comment, setComments, index}){
    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState(null)

    function handleDeleteComment(){
        deleteComment(comment.comment_id).then((res) => {
            setDeleted(true)
            setComments((currComments) => {
                currComments.splice(index,1)
                return[...currComments]
            })
        }).catch((err) => {
            setError(err)
        })
    }
    if(error){
        return <h3>Error: {error.message}</h3>
    }

    return (<section className="commentCard">
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
                <p>👍{comment.votes}</p>
                <button onClick={() => {
                    handleDeleteComment()
                }} disabled={deleted}>Delete Comment 🗑️</button>
    </section>)
}

export default CommentCard;