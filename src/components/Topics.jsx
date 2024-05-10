import { useEffect, useState } from "react";

import { getTopics, topicQuery } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";


function Topics(){
    const [topics, setTopics] = useState([])
    useEffect(() => {

            getTopics().then((data) => {
            setTopics(data.data)
        }) 
    }, [])

    return(
        <div className="topics">
            {topics.map((topic) => {
                return ( 
                    <div className="topicCard">
                        <h3>Topics: {topic.slug}</h3>
                        <p>{topic.description}</p>
                        <Link to={`/topics/${topic.slug}`}><button>Explore topic</button></Link>
                    </div> 
                       

                )
            })}
        </div>
    )
}

export default Topics;