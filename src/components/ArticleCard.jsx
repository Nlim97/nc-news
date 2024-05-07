function ArticleCard({article}){
    return(<div className="article_card">
        <h4 className="article_title">{article.title}</h4>
        <img src={article.article_img_url} className="article_img"/>
        <button>Read more</button>
    </div>)
}

export default ArticleCard;