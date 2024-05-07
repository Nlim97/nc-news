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