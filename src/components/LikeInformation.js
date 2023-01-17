import '../css/LikeInformation.css';

function LikeInformation() {
    let n = 13
    let emoji_src = "/images/dog-emoji.webp"


    let emoji = <img src={emoji_src} alt="emoji"></img>
    let emoji_area_list = Array(n).fill(emoji);
    console.log(emoji_area_list)

     return (<div className="likeinformation">
        <div className='likeinformation--heart'>
            <img src={require("../images/red-heart-emoji.png")} alt="red heart"></img>
        </div>

        <div className="likeinformation--arrowtext">
            <p>You have liked</p>
            <img src={require("../images/right-arrow.png")} alt="right arrow"></img>
            <p>{n} similar posts</p>
        </div>
        
        <div className="likeinformation--emojiarea">
            {emoji_area_list}
        </div>

    </div>)

}

export default LikeInformation;