function sortArticles(articles, sortBy, sortOrder){
    if(sortBy === 'Date'){
        articles.sort((a, b) => {
            const dateA = new Date(a.created_at)
            const dateB = new Date(b.created_at)
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        })
    }else if(sortBy === 'comment_count'){
        articles.sort((a, b) => {
            const countA = parseInt(a.comment_count);
            const countB = parseInt(b.comment_count);
            return sortOrder === 'asc' ? countA - countB : countB - countA;
        })
    }else if (sortBy === 'votes'){
        articles.sort((a, b) => {
            const votesA = a.votes;
            const votesB = b.votes;
            return sortOrder === 'asc' ? votesA - votesB : votesB - votesA;
        });
    }
}

export default sortArticles;