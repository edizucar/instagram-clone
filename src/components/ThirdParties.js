import '../css/ThirdParties.css'

import male_img from "../images/male.png";
import female_img from "../images/female.png";
import arrow_img from "../images/arrow.png";
import microsoft_img from "../images/microsoft.png";
import wish_img from "../images/wish.png"
import spotify_img from "../images/spotify.png";

function ThirdParties() {
    let gender = "Male";
    
    let gender_img = gender === "Male" ? male_img : female_img;


    return (<div className="thirdpartiesbutton">
        <h2>Third Parties</h2>
        <div className="thirdpartiesinfo">
            <h2 className='tp--title'>Third Parties</h2>
            <p className='tp--desc'>Third parties gain access to your child's information.</p>
            <div className='tp--vis'>
                <div className='tp--gender'>
                    <img src={gender_img}></img>
                </div>
                <div className='spotify logo'>
                    <img src={spotify_img}></img>
                    Spotify
                </div>
                <div className='wish logo'>
                    <img src={wish_img}></img>
                    Wish
                </div>
                <div className='microsoft logo'>
                    <img src={microsoft_img}></img>
                    Microsoft
                </div>
                <div className='spotify arrow'>
                    <img src={arrow_img}></img>
                    
                </div>
                <div className='wish arrow'>
                    <img src={arrow_img}></img>
                </div>
                <div className='microsoft arrow'>
                    <img src={arrow_img}></img>
                </div>
            </div>
        </div>

    </div>);
}

export default ThirdParties;