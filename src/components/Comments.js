import '../css/Comments.css'

function Comments(props){
    return (
        <div className="comments">
            View all {props.count} comments
        </div>
    )
}

export default Comments;