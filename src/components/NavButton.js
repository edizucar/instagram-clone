

function NavButton(props){
    return(
        <div className="navbutton">
            <img className="navbuttonimg" src={props.img} alt="logo" ></img>
            <p style={props.style}>{props.text}</p>
        </div>
    )
}

export default NavButton;