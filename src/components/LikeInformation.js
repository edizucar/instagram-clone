import '../css/LikeInformation.css';

function LikeInformation({topic,emoji,count}) {
    let max_count = 20;
    let overflow = count > max_count ? "+" : "";
    count = Math.min(count,max_count);

    let emoji_area_list = Array(count).fill(<img src={emoji} alt="emoji"></img>);


    return (<div className="likeinformation">
        <div className="likeinformation--text">
            <p>You have liked {count}{overflow}</p>
            <p>{topic} posts.</p>
        </div>
        
        <div className="likeinformation--emojiarea">
            {emoji_area_list}
        </div>

    </div>)

}

export default LikeInformation;