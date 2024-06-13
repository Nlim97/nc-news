import { useEffect, useState } from "react";
import { fetchArticles, topicQuery } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import sortArticles from "../utils/sortArticles";

function Articles(){
    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortBy, setSortBy] = useState("Date")
    const [orderBy, setOrderBy] = useState("desc")

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

    useEffect(()=> {
        const sortedArticles = [...articles]
        sortArticles(sortedArticles, sortBy, orderBy)
        setArticles(sortedArticles)
    },[sortBy,orderBy])


    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error: {error.message}</h2>
    }

    return ( 
    <>  
    <label className="sort" htmlFor="options">Sort by</label>
        <select name="options" id="options" value={sortBy} onChange={(event) => {
            setSortBy(event.target.value)
        }}>
        <option value="Date">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
        </select>
        <select name="order" id="order" value={orderBy} onChange={(event) => {
            setOrderBy(event.target.value)
        }}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
        </select>
    <div className="articles">
        {articles.map((article, index) => {
            return <ArticleCard article={article} key={index} />
        })}
    </div>
    </>)
  
} 

export default Articles;