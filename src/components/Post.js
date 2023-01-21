import '../css/Post.css';
import React from "react";

import AccountBar from "./AccountBar";
import InteractionArea from "./InteractionArea";
import Likes from "./Likes";
import Caption from "./Caption";
import Comments from "./Comments";


import PopularityInformation from "./PopularityInformation";
import InteractionInformation from "./InteractionInformation";
import LikeInformation from "./LikeInformation";

function Post({data}){
    let [isRevealed,setIsRevealed] = React.useState(false);


    let page = 
    <div className="post postregular">
            <AccountBar account_name={data.account} profile_picture={data.profile_picture}/>
            <img className="content" src={data.image} alt="post content"></img>
            <InteractionArea isRevealed={isRevealed} func={function(){
                setIsRevealed(revealed => !revealed);
            }}/>
            <Likes count={data.likes}/>
            <Caption account_name={data.account} text={data.caption}/>
            <Comments count={data.comments} />
    </div>

    if (isRevealed){
        page =
        <div className="post postinformation">
            <AccountBar 
                account_name={data.account}
                profile_picture={data.profile_picture}
                isRevealed={isRevealed}
                func={function(){
                    setIsRevealed(revealed => !revealed);
                }}
            />


            <div className="postdata">
                <h2 className="postdata--h2">Why is your child seeing this post?</h2>

                <LikeInformation 
                    topic={data.topic} 
                    emoji={data.topic_emoji} 
                    count={data.related_count} 
                />


                <InteractionInformation 
                    account_src={data.account} 
                    account_dest={data.related_account} 
                    profile_picture_src = {data.profile_picture}
                    profile_picture_dest = {data.related_profile_picture} 
                />

                <PopularityInformation recent_likes={data.recent_likes}/>
            </div>
            
        </div>
    }
    

    return (page)
}

export default Post;