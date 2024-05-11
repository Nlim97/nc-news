import { deleteComment } from "../utils/api";
import { useState } from "react";
function CommentCard({comment, setComments, index, user}){
    const [error, setError] = useState(null)

    function handleDeleteComment(){
        if(user === comment.author){
            deleteComment(comment.comment_id).then(() => {
                setComments((currComments) => {
                    const updatedComments = [...currComments]
                    updatedComments.splice(index,1)
                    return updatedComments
                })
            }).catch((err) => {
                setError(err)
            })
        }else{
            setError(new Error("You can only delete own comments. This comment has not been deleted."))
        }
        
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
                }}>Delete Comment 🗑️</button>
    </section>)
}

export default CommentCard;