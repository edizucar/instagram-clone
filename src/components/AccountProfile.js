import "../css/AccountProfile.css"

function AccountProfile({name,image}) {
    return (
        <div className="accountprofile">
            <img src={image} alt="profile"></img>
            <p>{name}</p>
        </div>
    )
}


export default AccountProfile;