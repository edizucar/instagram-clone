import '../css/RevealButton.css'
import open_eye from "../images/open-eye-icon.png"
import closed_eye from "../images/closed-eye-icon.png"
import return_icon from "../images/return.png"

function RevealButton({isRevealed,eventClick}) {
    let imgSrc = isRevealed ? return_icon : open_eye;
    return (
        <div className="reveal" onClick={eventClick}>
            <img src={imgSrc} alt="eye" />
        </div>
    )
}

export default RevealButton;