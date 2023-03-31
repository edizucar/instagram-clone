import "../css/InteractionInformation.css"


import AccountProfile from "./AccountProfile";
// import linked_icon from "../images/linked.png"

function InteractionInformation({account_src,account_dest, profile_picture_src,profile_picture_dest}) {

    return (<div className="interactioninformation">
        <AccountProfile name={account_src} image={profile_picture_src}/>
        <div className="interactioninformation--link">
            <p>Your child has interacted</p>
            {/* <img src={linked_icon} alt="link"></img> */}
            <p>with similar accounts</p>
        </div>
        <AccountProfile name={account_dest} image={profile_picture_dest}/>
        
    </div>)
}

export default InteractionInformation;