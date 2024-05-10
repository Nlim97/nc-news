import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://news-knrm.onrender.com/api"
})

export const fetchArticles = () => {
    return ncNewsApi.get(`/articles`)
}

export const fetchArticlesById = (id) => {
    return ncNewsApi.get(`/articles/${id}`)
}

export const fetchCommentsById = (id) => {
    return ncNewsApi.get(`/articles/${id}/comments`)
}

export const patchVotes = (id, obj) => {
    return ncNewsApi.patch(`/articles/${id}`, obj)
}

export const postComment = (id, obj) => {
    return ncNewsApi.post(`/articles/${id}/comments`, obj)
}

export const deleteComment = (comment_id) => {
    return ncNewsApi.delete(`/comments/${comment_id}`)
}

export const getTopics = () => {
    return ncNewsApi.get(`/topics`)
}