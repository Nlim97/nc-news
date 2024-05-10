import { useEffect, useState } from "react";
import { fetchArticles, topicQuery } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

function Articles(){
    const { topic } = useParams()
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(topic){
            topicQuery(topic).then((data) => {
                setArticles(data.data)
                setLoading(false)
            }).catch((error) => {
                setError(error)
                setLoading(false)
            })
        }else {
            fetchArticles().then((data) => {
                setArticles(data.data)
                setLoading(false)
            }).catch((error) => {
                setError(error)
                setLoading(false)
            })
        }
        
    },[topic])


    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error: {error.message}</h2>
    }

    return ( <div className="articles">
        {articles.map((article, index) => {
            return <ArticleCard article={article} key={index} />
        })}
    </div>)
} 

export default Articles;