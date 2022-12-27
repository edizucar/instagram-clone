import '../css/Likes.css'

function Likes(props){
    let formattedLikes = props.count.toLocaleString();
    return (
        <div className="likes">
            <span className="likes--span">{formattedLikes} likes</span>
        </div>
    )
}

export default Likes;