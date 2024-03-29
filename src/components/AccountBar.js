import '../css/AccountBar.css'
import RevealButton from './RevealButton';


function AccountBar({profile_picture,account_name,isRevealed,toolTipText,func}){
    // props has attributes 'account_name' and 
    return (
        <div className="accountbar">
            <img src={profile_picture} alt="profile of account"></img>
            <span className="accountname">{account_name}</span>
            {isRevealed && <RevealButton isRevealed={isRevealed} eventClick={func} toolTipText={toolTipText}/>}
            
        </div>
    )
}

export default AccountBar;