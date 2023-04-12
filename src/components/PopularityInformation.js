import "../css/PopularityInformation.css"

import graph from "../images/graph.png"

function PopularityInformation({recent_likes}) {
    return (<div className="popularityinformation">
        <p>This post is trending. <br/>It got {recent_likes} likes in the past day.</p>
        <div>
            <img src={graph} alt="graph"></img>
        </div>
    </div>)
}

export default PopularityInformation;