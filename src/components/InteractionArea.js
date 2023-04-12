import '../css/InteractionArea.css'

import like from "../images/notifications-icon.png"
import comment from "../images/comments-icon.png"
import send from "../images/messages-icon.png"
import save from "../images/save-icon.png"
import RevealButton from "./RevealButton";

function InteractionArea({isRevealed,func,toolTipText}){
    return (
        <div className="interactionarea">
            <div className="interactionarea--div1">
               
                <div className='instabutton'><img src={like} alt="" ></img></div>
                <div className='instabutton'><img src={comment} alt=""></img></div>
                <div className='instabutton'><img src={send} alt=""></img></div>
                <RevealButton revealed={isRevealed} toolTipText={toolTipText} eventClick={func}/>
            </div>
            <div className="interactionarea--div2">
                <div className='instabutton'><img src={save} alt=""></img></div>
            </div>
        </div>


    )
}

export default InteractionArea;