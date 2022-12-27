import '../css/Caption.css'

function Caption(props){
    let formattedCaption = props.text;
    let addMore = false;
    if (props.text.length > 200){
        formattedCaption = formattedCaption.slice(0,200) + "...";
        addMore = true;
    }
    return (
        <div className="caption">
            <span className="caption--account">{props.account_name}</span>
            <span className="caption--text">{formattedCaption}</span>
            {addMore && <span className="caption--more">more</span>}
        </div>
    )
}

export default Caption;