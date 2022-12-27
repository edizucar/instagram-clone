import '../css/InteractionArea.css'

import like from "../images/notifications-icon.png"
import comment from "../images/comments-icon.png"
import send from "../images/messages-icon.png"
import save from "../images/save-icon.png"

function InteractionArea(){
    return (
        <div className="interactionarea">
            <div>
                <img src={like} alt="" ></img>
                <img src={comment} alt=""></img>
                <img src={send} alt=""></img>
            </div>
            <div>
                <img src={save} alt=""></img>
            </div>
        </div>
    )
}

export default InteractionArea;