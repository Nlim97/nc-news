import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesById, fetchCommentsById, patchVotes } from "../utils/api";
import { useState } from "react";
import CommentCard from "./CommentCard";

function Article(){
    const {article_id} = useParams();
    const [loadingArticle ,setLoadingArticle] = useState(true)
    const [loadingComments, setLoadingComments] = useState(true)
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [errorArticle, setErrorArticle] = useState(null)
    const [errorComments, setErrorComments] = useState(null)
    const [votes, setVotes] = useState(0)
    const commentLink = `/articles/${article_id}/comments`

    useEffect(() => {
        fetchArticlesById(article_id).then((data) => {
            setArticle(data.data)
            setVotes(data.data.article.votes)
            setLoadingArticle(false)
        }).catch((err) => {
            setErrorArticle(err)
            setLoadingArticle(false)
        })
    },[article_id])
    useEffect(() => {
        fetchCommentsById(article_id).then((data) => {
            setComments(data.data)
            setLoadingComments(false)
        }).catch((err) => {
            setErrorComments(err)
            setLoadingComments(false)
        })
    },[article_id])

    function handleVote(){
        setVotes((currVotes) =>  currVotes + 1)
        patchVotes(article_id, {inc_votes: 1})
    }


    if(loadingArticle || loadingComments){
        return <h2>Loading...</h2>
    }

    if(errorArticle || errorComments){
        return <h2>Error: {error.message}</h2>
    }

    return(
        <>
        <div className="article">
            <h3>{article.article.title}</h3>
            <h4>{article.article.author}</h4>
            <img src={article.article.article_img_url}/>
            <p>{article.article.body}</p>
            <p>Total votes: {votes}</p>
            <button onClick={() => {
                handleVote()
            }}>👍 vote</button>
            <Link to={commentLink}><button>💬Read comment</button></Link>
        </div>
            {comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })}
        </>

    )
}

export default Article;