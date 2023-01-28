import '../css/ContentArea.css';
import React from "react";

import accounts from "../accounts";
import post_data from "../posts"
import emojis from "../emojis"

import Post from "./Post"

function ContentArea(){
    
    let posts = post_data.map(function(post) {
        post["profile_picture"] = accounts[post.account];
        post["related_profile_picture"] = accounts[post.related_account];

        post["topic_emoji"] = emojis[post.topic];

        return <Post data={post}/>

    }  );


    return (
        <div className="contentarea">
            {posts}
        </div>
    )
}

export default ContentArea;