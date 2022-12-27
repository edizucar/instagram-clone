import '../css/ContentArea.css';

import accounts from "../accounts";
import post_data from "../posts"

import Post from "./Post"

function ContentArea(){

    let posts = post_data.map(post => <Post data={post} profile={accounts[post.account]}/> );


    return (
        <div className="contentarea">
            {posts}
        </div>
    )
}

export default ContentArea;