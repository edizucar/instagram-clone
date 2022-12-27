import '../css/NavBar.css';

import NavButton from './NavButton'

import home_icon from "../images/home-icon.png"
import search_icon from "../images/search-icon.png"
import explore_icon from "../images/explore-icon.png"
import reels_icon from "../images/reels-icon.webp"
import messages_icon from "../images/messages-icon.png"
import notifications_icon from "../images/notifications-icon.png"
import create_icon from "../images/create-icon.webp"

import instagram_logo from "../images/instagram-logo.png"

function NavBar(){
    return (
        <nav className="navbar">
            <img className="instagram_logo" src={instagram_logo} alt="instagram logo"></img>
            <div className="buttons_area">
                <NavButton img={home_icon} text="Home" style={{fontWeight:'bold'}} />
                <NavButton img={search_icon} text="Search" />
                <NavButton img={explore_icon} text="Explore" />
                <NavButton img={reels_icon} text="Reels" />
                <NavButton img={messages_icon} text="Messages" />
                <NavButton img={notifications_icon} text="Notifications" />
                <NavButton img={create_icon} text="Create" />
            </div>
        </nav>
    )
}

export default NavBar;