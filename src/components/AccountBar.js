import '../css/AccountBar.css'


function AccountBar(props){
    // props has attributes 'account_name' and 
    return (
        <div className="accountbar">
            <img src={props.profile_picture} alt="profile of account"></img>
            <span className="accountname">{props.account_name}</span>
        </div>
    )
}

export default AccountBar;