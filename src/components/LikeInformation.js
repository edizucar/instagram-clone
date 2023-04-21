import '../css/LikeInformation.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import '../css/PrimeReact_Extras.css';

import React from "react";

function LikeInformation({topic,emoji,count,related_post_info}) {
    let day = ordinal_suffix_of(related_post_info.day);
    let month = related_post_info.month;
    let time = related_post_info.time;
    let url = related_post_info.url;




    let max_count = 20;
    let overflow = count > max_count ? "+" : "";
    count = Math.min(count,max_count);
    const [visible,setVisible] = React.useState(false);

    let emoji_area_list = Array(count).fill(<img src={emoji} alt="emoji"></img>);



    return (<div className="likeinformation">
        <div className="likeinformation--text">
            <p> Instagram knows your child has liked <strong>{count}{overflow} {topic} posts</strong></p>
        </div>
        <div className='likeinformation--history'>
        <div className="likeinformation--emojiarea">
            {emoji_area_list}
        </div>
        <Button className="prime-button" label={<strong>More Information</strong>} onClick={() => setVisible(true)}/>
        </div>
        <Dialog header="Instagram stores data about your child's interests" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                Instagram stores every single like that your child has given a post. Other information such as the time and date that they liked the post and the post topic is collected in order to form an accurate profile on your child.
                Instagram knows that your child liked a post about {topic} at {time} on the {day} of {month}.
            </p>
            <Button className="prime-button" label="Click here to see the post" onClick={() => {window.open(url); setVisible(false)}}/>
        </Dialog>

    </div>)

}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export default LikeInformation;

//  style={{backgroundColor:"blueviolet"}}