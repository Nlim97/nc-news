function ArticleCard({article}){
    return(<div>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} width="100"/>
        <button>Read more</button>
    </div>)
}

export default ArticleCard;