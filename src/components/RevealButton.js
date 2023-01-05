import '../css/RevealButton.css'
import open_eye from "../images/open-eye-icon.png"
import closed_eye from "../images/closed-eye-icon.png"

function RevealButton(props) {
    let imgSrc = props.revealed ? closed_eye : open_eye;
    return (
        <div className="reveal" onClick={props.eventClick}>
            <img src={imgSrc} alt="eye" />
        </div>
    )
}

export default RevealButton;