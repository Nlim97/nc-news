import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import { useState } from "react";

function Article(){
    const {article_id} = useParams();
    const [loading ,setLoading] = useState(true)
    const [article, setArticle] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchArticlesById(article_id).then((data) => {
            setArticle(data.data)
            setLoading(false)
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    },[article_id])

    console.log(article)
    if(loading){
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Error: {error.message}</h2>
    }

    return(
        <div>
            <h3>{article.article.title}</h3>
            <img src={article.article.article_img_url}/>
            <p>{article.article.body}</p>
            <p>Total votes: {article.article.votes}</p>
            <button>👍 vote</button>
            <button>💬 comment</button>

        </div>
    )
}

export default Article;