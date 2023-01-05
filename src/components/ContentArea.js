import '../css/ContentArea.css';
import React from "react";

import accounts from "../accounts";
import post_data from "../posts"

import Post from "./Post"
import RevealButton from "./RevealButton"

function ContentArea(){
    let [isRevealed,setIsRevealed] = React.useState(false);

    let posts = post_data.map(post => <Post revealed={isRevealed} data={post} profile={accounts[post.account]}/> );


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