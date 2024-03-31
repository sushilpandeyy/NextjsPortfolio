import { Url } from "url";

interface MyObject {
    id: string;
    name: string;
    sub: string;
    img: string;
}

const projects: MyObject[] = [
    {
        id: "skoop",
        name: "Skoop",
        sub: "Decentralized News Platform",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1710962200/zng2ogv0tnab6mnoqtit.png"
    },
    {
        id: "borrowbridge",
        name: "Borrow Bridge",
        sub: "Decentralized Micro-Investment Platform",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711783344/uz4locjrgbyq6ztpkfcc.jpg"
    },
    {
        id: "ihh",
        name: "IHH Player",
        sub: "Audio Streaming Platform",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png"
    },
    {
        id: "myraa",
        name: "Myraa Technologies",
        sub: "Full Stack Development Intern",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png"
    },
    {
        id: "fascia",
        name: "Fascia",
        sub: "Data Analysis Dashboard",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1707815762/uzovvq9as9o2zesm4vzq.jpg"
    },
    {
        id: "disstract",
        name: "Diss-Stract",
        sub: "Time Management Chrome Extension",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711809480/mtciojkuqru8ua9rjpki.jpg"
    },
    {
        id: "everydukan",
        name: "EveryDukan",
        sub: "All-in-one Shopping",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711781604/hyg4tdpt19q4nvbggfvg.jpg"
    },
    {
        id: "vpn",
        name: "VPN Police",
        sub: "VPN Application",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711783998/k5jbtngqp1irseebsozq.png"
    },
    {
        id: "wejobstation",
        name: "WeJobStation",
        sub: "Job Board",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711781868/zxvywrgwxjdn0f9tvbn4.jpg"
    },
    {
        id: "freelancing",
        name: "Freelancing",
        sub: "Various Agency Work",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711781602/fzlgpuq0wrhksmxpbt5q.jpg"
    },
    {
        id: "pni",
        name: "Prakash News of India",
        sub: "Local News Aggregator",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711781854/kzcyeg0vdogjhuflcunl.jpg"
    },
];

interface myrole {
    item: string
}
interface member {
    name: string,
    link: string,
}

interface Workobj {
    id: string;
    name: string;
    sub: string;
    role: myrole[];
    team: member[];
    stack: myrole[];
    time: string;
}

const Workdata: Workobj[] = [
    {
    id: "skoop",
    name: "Skoop",
    sub: "Decentralized News Platform",
    role: [{
        item: "Builder"
    }],
    team: [{
        name: "Sachin Kumar",
        link: "https://www.linkedin.com/in/sachin-kumar-351b59203/",
    },
{
    name: "Sachin Kumar",
    link: "https://www.linkedin.com/in/sachin-kumar-351b59203/",
},
{
    name: "BJ Gridhar",
    link: "https://www.linkedin.com/in/bj-gridhar-945419259/",
},
{
    name: "Anand Kumar Sharma",
    link: "https://www.linkedin.com/in/anand-kumar-sharma-7304b1254/"
},
],
    stack: [
        {
            item: "Solidity"
        },
        {
            item: "React.js"
        },
        {
            item: "TailwindCSS"
        },
        {
            item: "Tensorflow"
        },
        {
            item: "Pytorch"
        },
    ],
    time: "March 2024"
    },
    {
        id: "skoop",
        name: "Skoop",
        sub: "Decentralized News Platform",
        role: [{
            item: "Builder"
        }],
        team: [{
            name: "Sachin Kumar",
            link: "https://www.linkedin.com/in/sachin-kumar-351b59203/",
        },
    {
        name: "Sachin Kumar",
        link: "https://www.linkedin.com/in/sachin-kumar-351b59203/",
    },
    {
        name: "BJ Gridhar",
        link: "https://www.linkedin.com/in/bj-gridhar-945419259/",
    },
    {
        name: "Anand Kumar Sharma",
        link: "https://www.linkedin.com/in/anand-kumar-sharma-7304b1254/"
    },
    ],
        stack: [
            {
                item: "Solidity"
            },
            {
                item: "React.js"
            },
            {
                item: "TailwindCSS"
            },
            {
                item: "Tensorflow"
            },
            {
                item: "Pytorch"
            },
        ],
        time: "March 2024"
        },
] 


export {projects, Workdata}