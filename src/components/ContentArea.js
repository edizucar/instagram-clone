import '../css/ContentArea.css';
import React from "react";

import accounts from "../accounts";
import post_data from "../posts"
import emojis from "../emojis"

import Post from "./Post"
import RevealButton from "./RevealButton"

function ContentArea(){
    let [isRevealed,setIsRevealed] = React.useState(false);
    
    let posts = post_data.map(function(post) {
        post["profile_picture"] = accounts[post.account];
        post["related_profile_picture"] = accounts[post.related_account];

        post["topic_emoji"] = emojis[post.topic];

        return <Post revealed={isRevealed} data={post}/>

    }  );


    return (
        <div className="contentarea">
            <div className="postsarea">
                {posts}
            </div>
            <RevealButton revealed={isRevealed} eventClick={function(){
                setIsRevealed(os => !os);
            }}/>
        </div>
    )
}

export default ContentArea;