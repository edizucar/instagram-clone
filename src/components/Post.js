import '../css/Post.css';

import AccountBar from "./AccountBar";
import InteractionArea from "./InteractionArea";
import Likes from "./Likes";
import Caption from "./Caption";
import Comments from "./Comments";

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
            
        </div>
    }
    

    return (page)
}

export default Post;