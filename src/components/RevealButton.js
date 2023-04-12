import '../css/RevealButton.css'
import open_eye from "../images/open-eye-icon.png"
import return_icon from "../images/return.png"
import React from "react"

function RevealButton({isRevealed,eventClick,toolTipText}) {
    let imgSrc = isRevealed ? return_icon : open_eye;
    let mode = isRevealed ? "revealed" : "notrevealed";
    const [showTooltip, setShowTooltip] = React.useState(false);
    
    
    const handleMouseEnter = () => {
        setShowTooltip(true);
      };
    
      const handleMouseLeave = () => {
        setShowTooltip(false);
      };


    let tw = (toolTipText.length/1.2).toString() + "ch";
    return (
        <div className={"revealbutton " + mode} onClick={eventClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imgSrc} alt="eye" />
            {showTooltip && <span style={{width:tw}} className='tooltiptext'>{toolTipText}</span>}
        </div>
    )
}

export default RevealButton;