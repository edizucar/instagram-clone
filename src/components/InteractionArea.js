import '../css/InteractionArea.css'

import like from "../images/notifications-icon.png"
import comment from "../images/comments-icon.png"
import send from "../images/messages-icon.png"
import save from "../images/save-icon.png"
import RevealButton from "./RevealButton";

function InteractionArea({isRevealed,func}){
    return (
        <div className="interactionarea">
            <div className="interactionarea--div1">
               
                <div><img src={like} alt="" ></img></div>
                <div><img src={comment} alt=""></img></div>
                <div><img src={send} alt=""></img></div>
                <RevealButton revealed={isRevealed} eventClick={func}/>
            </div>
            <div className="interactionarea--div2">
                <div><img src={save} alt=""></img></div>
            </div>
        </div>


    )
}

export default InteractionArea;