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
        sub: "VPN Service Application",
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
        sub: "Local News Agency",
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
        item: "Ideation"
    },
    {
        item: "Development"
    },
],
    team: [
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
            item: "React"
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
        id: "borrowbridge",
        name: "Borrow Bridge",
        sub: "Decentralized Micro-Investment Platform",
        role: [{
            item: "Full Stack Development"
        },
        {
            item: "Ideation"
        },
    ],
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
                item: "Mongodb"
            },
            {
                item: "Express"
            },
            {
                item: "React"
            },
            {
                item: "Solidity"
            },
            {
                item: "TailwindCSS"
            },
        ],
        time: "January 2024"
    },
    {
        id: "myraa",
        name: "Myraa Technologies",
        sub: "Full Stack Development Intern",
        role: [{
            item: "Full Stack Developer"
        },
    ],
    team: [],
    stack: [
            {
                item: "HTML"
            },
            {
                item: "CSS"
            },
            {
                item: "Javascript"
            },
            {
                item: "Tornado Python"
            },
            {
                item: "AWS EC2"
            },
            {
                item: "AWS S3 Bucket"
            },
            {
                item: "Vercel"
            },
        ],
        time: "Oct 2023 - Jan 2024"
    },
    {
        id: "ihh",
        name: "IHH Player",
        sub: "Audio Streaming Platform",
        role: [{
            item: "Full Stack Development"
        },
        {
            item: "Ideation"
        }
    ],
    team: [],
    stack: [
            {
                item: "React"
            },
            {
                item: "Express"
            },
            {
                item: "Postgres Sql"
            },
            {
                item: "AWS EC2"
            },
            {
                item: "AWS S3 Bucket"
            },
            {
                item: "Vercel"
            },
        ],
        time: "Feb 2024 - Present"
    },
    {
        id: "fascia",
        name: "Fascia",
        sub: "Data Analysis Dashboard",
        role: [{
            item: "Full Stack Development"
        },
    ],
    team: [],
    stack: [
            {
                item: "React"
            },
            {
                item: "Express"
            },
            {
                item: "Mongodb"
            },
            {
                item: "Material UI"
            },
            {
                item: "onRender"
            },
            {
                item: "Vercel"
            },
        ],
        time: "Sep 2023 - Nov 2023"
    },
    {
        id: "disstract",
        name: "Diss-Stract",
        sub: "Time Management Chrome Extension",
        role: [{
            item: "Ideation"
        },
        {
            item: "Development"
        }
    ],
    team: [],
    stack: [
            {
                item: "HTML"
            },
            {
                item: "CSS"
            },
            {
                item: "Javscript"
            },
        ],
        time: "July 2023"
    },
    {
        id: "everydukan",
        name: "EveryDukan",
        sub: "All-in-one Shopping",
        role: [{
            item: "Ideation",
        },
        {
            item: "Building",
        },
        {
            item: "Operations"
        }
    ],
    team: [],
    stack: [
            {
                item: "Kodular"
            },
        ],
        time: "Sept 2021"
    },
    {
        id: "vpn",
        name: "VPN Police",
        sub: "VPN Service Application",
        role: [{
            item: "Ideation",
        },
        {
            item: "Building",
        },
        {
            item: "Operations"
        }
    ],
    team: [],
    stack: [
            {
                item: "Kotlin Development"
            },
        ],
        time: "Dec 2021 - April 2023"
    },
    {
        id: "wejobstation",
        name: "WeJobStation",
        sub: "Job Board",
        role: [
        {
            item: "Owner"
        },
        {
            item: "Development",
        },
        {
            item: "Operations",
        },
        
    ],
    team: [],
    stack: [
            {
                item: "Wordpress"
            },
            {
                item: "Kotlin"
            },
            {
                item: "SEO"
            },
        ],
        time: "Mar 2020 - Dec 2023"
    },
    {
        id: "freelancing",
        name: "Freelancing",
        sub: "Various Agency Work",
        role: [
            {
                item: "MERN Application Development"
            },
        {
            item: "Wordpress Development"
        },
        {
            item: "Shopify Development",
        },
        {
            item: "SEO Specilist",
        },
        {
            item: "Content Strategy",
        },
        {
            item: "Digital Marketing",
        },
        
    ],
    team: [],
    stack: [
        {
            item: "MERN Applications"
        },
        {
            item: "Web Development"
        },
            {
                item: "Wordpress"
            },
            {
                item: "Shopify"
            },
            {
                item: "Google Ads"
            },
            {
                item: "Facebook Ads"
            },
            {
                item: "SEO"
            },
        ],
        time: "Mar 2020 - Present"
    },
    {
        id: "pni",
        name: "Prakash News of India",
        sub: "Local News Agency",
        role: [
            {
                item: "Ideation"
            },
        {
            item: "Developer"
        },
        
    ],
    team: [],
    stack: [
            {
                item: "Blogger"
            },
            {
                item: "SEO"
            },
        ],
        time: "May 2019 - March 2022"
    },
] 


export {projects, Workdata}