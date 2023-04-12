import "../css/InteractionInformation.css"


import AccountProfile from "./AccountProfile";
// import linked_icon from "../images/linked.png"

function InteractionInformation({account_src,account_dest, profile_picture_src,profile_picture_dest}) {

    return (<div className="interactioninformation">
        <AccountProfile name={capAccountName(account_src)} image={profile_picture_src}/>
        <div className="interactioninformation--link">
            <p>Instagram knows your child has interacted with similar accounts</p>
        </div>
        <AccountProfile name={capAccountName(account_dest)} image={profile_picture_dest}/>
        
    </div>)
}


function capAccountName(name) {
    let maxLength = 10;
    if (name.length > maxLength) {
        return name.slice(0,maxLength) + "...";
    }
    else{
        return name
    }
}

export default InteractionInformation;