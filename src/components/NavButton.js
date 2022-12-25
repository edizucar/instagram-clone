

function NavButton(props){
    let name = "navbutton";
    if (props.bold){
        name = "bold_" + name;
    }

    return(
        
        <div className={name}>
            <img className="navbuttonimg" src={props.img} alt="logo"></img>
            <p>{props.text}</p>
        </div>
    )
}

export default NavButton;