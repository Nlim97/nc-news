import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesById, fetchCommentsById, patchVotes } from "../utils/api";
import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./Form";
function Article(){
    const {article_id} = useParams();
    const [loadingArticle ,setLoadingArticle] = useState(true)
    const [loadingComments, setLoadingComments] = useState(true)
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [errorArticle, setErrorArticle] = useState(null)
    const [votes, setVotes] = useState(0)
    const [voted, setVoted] = useState(false)
    const [user, setUser] = useState('tickle122')
    const [voteError, setVoteError] = useState(false)
    const commentLink = `/articles/${article_id}/comments`



    useEffect(() => {
        fetchArticlesById(article_id).then(({data}) => {
            setArticle(data)
            setVotes(data.article.votes)
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
            if(err.response.status === 404){
                setComments([])
                setLoadingComments(false)
            }
        })
    },[article_id])

    function handleVote(){
        setVotes((currVotes) =>  currVotes + 1)
        setVoted(true)
        setVoteError(false)
        patchVotes(article_id, {inc_votes: 1}).catch((err) => {
            setVoteError(true)
        })
    }


    if(loadingArticle || loadingComments){
        return <h2>Loading...</h2>
    }

    if(errorArticle ){
        return <h2>Error: {errorArticle.message}</h2>
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
            }} disabled={voted}>👍 vote</button>
            <Link to={commentLink}><button>💬Read comment</button></Link>
        </div>
            <CommentForm article_id={article_id} setComments={setComments}/>
            {comments.length > 0 ? comments.map((comment, index) => {
                return<CommentCard comment={comment} setComments={setComments} index={index} user={user} key={index}/> 
            }): <h3>no comments yet</h3>}
        </>

    )
}

export default Article;