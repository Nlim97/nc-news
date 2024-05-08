import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "../utils/api";

function Comments(){
    const { article_id } = useParams()   
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchCommentsById(article_id).then((data) => {
            setComments(data.data)
            setLoading(false)
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    },[article_id])

    if(loading){
        return <h2>loading...</h2>
    }
    if(error){
        return <h2>Error: {error.message}</h2>
    }
    return (<div>
        {comments.map((comment, index) => {
            return(<div key={index}>
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
                <button>Delete Comment 🗑️</button>
            </div>)
        })}
    </div>)
}

export default Comments;