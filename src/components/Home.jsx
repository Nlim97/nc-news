import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"

function Home(){
    const [articles, setArticles] = useState([])

   
    
    
    useEffect(() => {
        fetchArticles().then(({data}) => {
            const topData = data.slice(0,3)
            setArticles(topData)
        })
    },[])

    return (
        
        <div className="home">
        {articles.map((article, index) => {
            return <ArticleCard article={article} key={index} />
        })}
    </div>)


}

export default Home