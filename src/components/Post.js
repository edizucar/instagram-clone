import '../css/Post.css';
import React from "react";
import autoAnimate from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react'

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
    const [toolTipText, setToolTipText] = React.useState("See your child's data Instagram stores related to this post.");

    let [parentRef, enableAnimations] = useAutoAnimate();


    const func = () => {
        setIsRevealed(revealed => !revealed);
        setToolTipText((text) => {
            console.log("in the thing");
            if (text == "See your child's data Instagram stores related to this post.") {
                return "Back to post."
            }
            else{
                return "See your child's data Instagram stores related to this post."
            }
        });
    };

    let page = 
    <div ref={parentRef} className="post postregular">
            <AccountBar account_name={data.account} profile_picture={data.profile_picture}/>
            <img className="content" src={data.image} alt="post content"></img>
            <InteractionArea isRevealed={isRevealed} toolTipText={toolTipText} func={func}/>
            <Likes count={data.likes}/>
            <Caption account_name={data.account} text={data.caption}/>
            <Comments count={data.comments} />
    </div>

    if (isRevealed){
        page =
        <div ref={parentRef} className="post postinformation">
            <AccountBar 
                account_name={data.account}
                profile_picture={data.profile_picture}
                isRevealed={isRevealed}
                toolTipText= {toolTipText}
                func={func}
            />


            <div className="postdata">
                <h2 className="postdata--h2">Data Instagram stores about your child related to this post</h2>

                <LikeInformation 
                    topic={data.topic} 
                    emoji={data.topic_emoji} 
                    count={data.related_count}
                    related_post_info = {data.related_post_info} 
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