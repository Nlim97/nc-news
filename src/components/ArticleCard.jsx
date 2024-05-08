import { Link } from "react-router-dom";

function ArticleCard({article}){
    const link = `/articles/${article.article_id}`
    return(<section className="article_card">
        <h4 className="article_title">{article.title}</h4>
        <img src={article.article_img_url} className="article_img"/>
        <Link to={link}><button>Read more</button></Link>
    </section>)
}

export default ArticleCard;