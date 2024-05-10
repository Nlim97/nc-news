import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

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
                        <button>Explore topic</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Topics;