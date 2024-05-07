import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function Articles(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((data) => {
            setArticles(data.data)
        })
    },[])

    return ( <div>
        {articles.map((article, index) => {
            return <ArticleCard article={article} key={index} />
        })}
    </div>)
} 

export default Articles;