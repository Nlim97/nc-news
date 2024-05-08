function CommentCard({comment}){
    return (<section className="commentCard">
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
                <p>👍{comment.votes}</p>
                <button>Delete Comment 🗑️</button>
    </section>)
}

export default CommentCard;