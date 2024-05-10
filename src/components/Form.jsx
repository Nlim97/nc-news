import { useState } from "react";
import { postComment } from "../utils/api";

function CommentForm({article_id, setComments}){
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    const [postErr, setPostErr] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        const newComment = {
            comment_id: Date.now(),
            author: username,
            body: body,
            created_at: new Date().toISOString(),
            votes: 0,
        };
        setComments((currComments) => [newComment,...currComments])
        postComment(article_id,{username: username, body: body}).then((res) => {
            setBody("")
            setUsername("")
            setSubmitted(true) 
        }).catch((err) => {
            setPostErr(err)
        })
        
    }
    if(postErr){
        return <h3>Error: {postErr.message}</h3>
    }
    if(submitted){
        return <h3>Success!</h3>
    }
    return (
        <form className="commentForm"onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input id="username" onChange={(event) => {
            setUsername(event.target.value)
        }} value={username} disabled={submitted}/>
        <label htmlFor="body">body</label>
        <textarea id="body" onChange={(event) => {
            setBody(event.target.value)
        }} value={body} disabled={submitted}/>
        <button>Submit</button>
    </form>
    )
}

export default CommentForm;