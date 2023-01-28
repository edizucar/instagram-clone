import post1 from './images/posts/1.jpg';
import post2 from './images/posts/2.jpg';
import post3 from './images/posts/3.jpg';
import post4 from './images/posts/4.jpg';
import post5 from './images/posts/5.jpg';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
} 

let posts = [
    {
        account:"barlebofc",
        image:post1,
        caption:"🇫🇷 PSG owner Nasser Al-Khelaifi on signing Ronaldo too 🗣️: “Cristiano Ronaldo at PSG? With the three players we have (the MNM), it's very difficult, but I wish him the best. He is fantastic and he is still an extraordinary player.” 🇵🇹👏 Would you like to see Messi and Ronaldo together at PSG?",
        comments:513,
        likes:645012,
        date:new Date(2022,12,8,10,33),
        topic:"football",
        related_account:"cristiano",
        related_count:13,
        recent_likes:1023,
    },
    {
        account:"therealstanhere",
        image:post2,
        caption:"They are 6 person's but why they're calling each others D12 you know?",
        comments:112,
        likes:1626,
        date:new Date(2023,1,25,13,12),
        topic:"music",
        related_account:"eminem",
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger(1,1626)
    },
    {
        account:"gazingoutwards",
        image:post3,
        caption:"I decided to take another look at the galaxy NGC 772. It is a massive spiral galaxy 130 million lightyears from Earth, and at 200,000 lightyears in diameter is quite a bit larger than our own Milky Way galaxy. ",
        comments:232,
        likes:5492,
        date:new Date(2023,1,23),
        topic:"space",
        related_account:"nasa",
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger(1,5492),
    },
    {
        account:"anime.is.aesthetic",
        image:post4,
        caption:"Just chilling 😌",
        comments:14,
        likes:4223,
        date:new Date(2023,1,25),
        topic:"movie",
        related_account:"nisino2222",
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger(1,4223)
    },
    {
        account:"byyclouds",
        image:post5,
        caption:"Lil flower lady 🥰",
        comments:3,
        likes:469,
        date:new Date(2023,1,28),
        topic:"art",
        related_account:"xpricey",
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger(1,469)
    },

]

/*
    {
        account:,
        image:,
        caption:,
        comments:,
        likes:,
        date:new Date(),
        topic:,
        related_account:,
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger()
    },
    {
        account:,
        image:,
        caption:,
        comments:,
        likes:,
        date:new Date(),
        topic:,
        related_account:,
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger()
    },
    {
        account:,
        image:,
        caption:,
        comments:,
        likes:,
        date:new Date(),
        topic:,
        related_account:,
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger()
    },
    {
        account:,
        image:,
        caption:,
        comments:,
        likes:,
        date:new Date(),
        topic:,
        related_account:,
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger()
    },
    {
        account:,
        image:,
        caption:,
        comments:,
        likes:,
        date:new Date(),
        topic:,
        related_account:,
        related_count:getRndInteger(3,10),
        recent_likes:getRndInteger()
    },
];
;

*/



export default posts;