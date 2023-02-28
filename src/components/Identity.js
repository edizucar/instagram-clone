import '../css/Identity.css'

import male_img from "../images/male.png";
import female_img from "../images/female.png";

import location_img from "../images/location.png";
import phone_img from "../images/phone.png";

function Identity() {
    let age = 21;
    let phone = "Samsung";
    let os = "Android";
    let city = "Cambridge";
    let state = "Cambridgeshire"
    let gender = "Male";
    
    let gender_img = gender === "Male" ? male_img : female_img;



    return (<div className="identitybutton">
        <h2>Identity</h2>

        <div className="identityinfo">
            <h2>Your child's identity</h2>
            <div className='identityinfo--flex'>
                <div className='identityitem gender'>
                    <img src={gender_img} alt="gender"></img>
                    <p>{gender}</p>
                </div>
                <div className='identityitem age'>
                    <h2>{age}</h2>
                    <p>Years Old</p>
                </div>
                <div className='identityitem phone'>
                    <img src={phone_img} alt="phone"></img>
                    <p>{phone}, {os}</p>                    
                </div>
                <div className='identityitem location'>
                    <img src={location_img} alt="location"></img>
                    <p>{city}, {state}</p>                      
                </div>
            </div>
        </div>
    </div>);
}

export default Identity;