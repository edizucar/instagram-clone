import '../css/Post.css';

import AccountBar from "./AccountBar";
import InteractionArea from "./InteractionArea";
import Likes from "./Likes";
import Caption from "./Caption";
import Comments from "./Comments";

import PopularityInformation from "./PopularityInformation";
import InteractionInformation from "./InteractionInformation";
import LikeInformation from "./LikeInformation";

function Post({revealed,data,profile}){
    let page = 
    <div className="post">
        <AccountBar account_name={data.account} profile_picture={profile}/>
        <img className="content" src={data.image} alt="post content"></img>
        <InteractionArea />
        <Likes count={data.likes}/>
        <Caption account_name={data.account} text={data.caption}/>
        <Comments count={data.comments} />
    </div>

    if (revealed){
        page =
        <div className="post">
            <AccountBar account_name={data.account} profile_picture={profile}/>
            <div className="postdata">
                <h2 className="postdata--h2">Why am I seeing this post?</h2>
                <LikeInformation />
                <InteractionInformation />
                <PopularityInformation />
            </div>
            
        </div>
    }
    

    return (page)
}

export default Post;