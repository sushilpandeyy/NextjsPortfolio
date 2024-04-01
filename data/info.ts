
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
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711889398/y3kfkssreqfflen219wy.png"
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
            name: "Sushil Pandey",
            link: "https://www.linkedin.com/in/contactsushil/",
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
        team: [
     {
         name: "Maheep Tulsiyan",
         link: "https://www.linkedin.com/in/maheep-tulsyan-972212245/",
     },
     {
         name: "Satyam Kumar",
         link: "https://www.linkedin.com/in/satyam-kumar-7361661b3/",
     },
    {
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },
    {
        name: "Satyendra Singh",
        link: "https://www.linkedin.com/in/satyendra-singh-70004b254/"
    },
    {
        name: "Avinash Yadav",
        link: "https://www.linkedin.com/in/avinash-yadav-16hgnisgar/"
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
    team: [
        {
            name: "Sushil Pandey",
            link: "https://www.linkedin.com/in/contactsushil/",
        },],
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
    team: [
        {
            name: "Sushil Pandey",
            link: "https://www.linkedin.com/in/contactsushil/",
        },],
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
    team: [
        {
            name: "Sushil Pandey",
            link: "https://www.linkedin.com/in/contactsushil/",
        },],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },
{
name: "Sachin Kumar",
link: "https://www.linkedin.com/in/sachin-kumar-351b59203/",
},
{
name: "Sahil Sharma",
link: "https://www.linkedin.com/in/sahil-sharma-a735b4247/",
},
{
name: "Anand Kumar Sharma",
link: "https://www.linkedin.com/in/anand-kumar-sharma-7304b1254/"
},],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },],
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
    team: [{
        name: "Sushil Pandey",
        link: "https://www.linkedin.com/in/contactsushil/",
    },],
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

interface btnobj {
    title: string,
    link: string,
}

interface workheadobj {
    id: string;
    Description: string;
    Context: string;
    Buttons: btnobj[];
}

const Headdata: workheadobj[] = [
    {
        id: "skoop",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/sushilpandeyy/skoop"
            },
            {
                title: "Website",
                link: "https://skoop1.vercel.app/"
            },
        ],
    },
    {
        id: "borrowbridge",
        Description: "A Micro-Investment Platform for Tier-1 City Audience to invest in tier-3 cities.",
        Context: 
        "This project was conceived during the hackathon DeFy'24, hosted by VIT Chennai. Our platform introduces an innovative solution for small businesses or individuals seeking financial assistance for equipment procurement. It operates on the principle of raising funds through investment. As beneficiaries begin to generate income, they commit to repaying the invested amount with interest. This unique model not only benefits borrowers but also provides an attractive opportunity for investors seeking potential returns",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/MaheepTulsian/BorrowBridge2.0"
            },
        ],
    },
    {
        id: "myraa",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Website",
                link: "https://www.myraatechnologies.com/"
            },
        ],
    },
    {
        id: "ihh",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/sushilpandeyy/IHHPlayer"
            },
            {
                title: "Website",
                link: "https://ihh.contactsushil.me/"
            },
        ],
    },
    {
        id: "fascia",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/sushilpandeyy/Fascia"
            },
            {
                title: "Website",
                link: "https://fascia-nu.vercel.app/"
            },
        ],
    },
    {
        id: "disstract",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/sushilpandeyy/HackSRM4.0"
            },
            {
                title: "Devfolio",
                link: "https://devfolio.co/projects/disstract-d051"
            },
        ],
    },
    {
        id: "everydukan",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Playstore",
                link: "https://play.google.com/store/apps/details?id=com.dukan.every"
            },
            
        ],
    },
    {
        id: "vpn",
        Description: "string",
        Context: "string",
        Buttons: [],
    },
    {
        id: "wejobstation",
        Description: "string",
        Context: "string",
        Buttons: [],
    },
    {
        id: "freelancing",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Email Me",
                link: "https://mailto:contact.sushilpandey@gmail.com"
            }
        ],
    },
    {
        id: "pni",
        Description: "string",
        Context: "string",
        Buttons: [
            {
                title: "Website",
                link: "https://www.prakashnewsofindia.in/"
            }
        ],
    },
]

interface workbodybj{
    id: string;
    img: string;
}

const Workbody: workbodybj[] = [
    {
        id: "skoop",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1710962200/zng2ogv0tnab6mnoqtit.png"
    },
    {
        id: "borrowbridge",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711783344/uz4locjrgbyq6ztpkfcc.jpg"
    },
    {
        id: "ihh",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png"
    },
    {
        id: "myraa",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711889398/y3kfkssreqfflen219wy.png"
    },
    {
        id: "fascia",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1707815762/uzovvq9as9o2zesm4vzq.jpg"
    },
    {
        id: "disstract",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711809480/mtciojkuqru8ua9rjpki.jpg"
    },
    {
        id: "everydukan",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711781604/hyg4tdpt19q4nvbggfvg.jpg"
    },
    {
        id: "vpn",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711783998/k5jbtngqp1irseebsozq.png"
    },
    {
        id: "wejobstation",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711781868/zxvywrgwxjdn0f9tvbn4.jpg"
    },
    {
        id: "freelancing",
        img: "https://res.cloudinary.com/djug8zfu7/image/upload/v1711781602/fzlgpuq0wrhksmxpbt5q.jpg"
    },
    {
        id: "pni",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711781854/kzcyeg0vdogjhuflcunl.jpg"
    },
]

interface artobj{
        id: string;
        name: string;
        sub: string;
        img: string;

}

const Articles: artobj[] = [
    {
        id: "https://contactsushil.medium.com/full-stack-development-intern-experience-e5bf1a3625bb",
        name: "Full Stack Development Intern Experience",
        sub: "Published on Apr 1, 2024",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711975778/hriztvprtxiunhbvtprf.png"
    },
    {
        id: "https://contactsushil.medium.com/exploring-enigmas-varanasi-unveiled-dae0e30293fb",
        name: "Exploring Enigmas: Varanasi Unveiled",
        sub: "Published on Mar 16, 2024",
        img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OJHlK-XvFJPAn-vR.jpg"
    },
    {
        id: "https://contactsushil.medium.com/you-need-a-doctor-d5da77770537",
        name: "You need a doctor!!!!",
        sub: "Published on Feb 4, 2024",
        img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*SQ4AVFjfl7cq5qHO"
    },
    {
        id: "https://contactsushil.medium.com/planning-though-ad77f91711b1",
        name: "Planning Though",
        sub: "Published on Dec 31, 2023",
        img: "https://miro.medium.com/v2/resize:fit:1252/format:webp/0*xNRUYGojVF4UFBPT"
    },
    {
        id: "https://contactsushil.medium.com/what-is-huffman-compression-3b4d22b61f11",
        name: "What is Huffman Text Compression?",
        sub: "Published on Sep 2, 2023",
        img: "https://miro.medium.com/v2/resize:fit:2000/format:webp/0*zzbKBY7Qe8eqwif1.jpg"
    },
    {
        id: "https://contactsushil.medium.com/experience-of-participating-in-online-hackathon-c58987dc45ea",
        name: "Experience of Participating in Online Hackathon",
        sub: "Published on July 24, 2023",
        img: "http://res.cloudinary.com/djug8zfu7/image/upload/v1711975848/itiqevzyl6dup8wwkqtj.webp"
    },
    {
        id: "https://contactsushil.medium.com/building-my-first-chrome-extension-8b97594494ec",
        name: "Building My First Chrome Extension",
        sub: "Published on May 12, 2023",
        img: "https://imgeng.jagran.com/images/2023/apr/google-chrome-extensions1681045814261.jpg"
    },
    {
        id: "https://contactsushil.medium.com/how-to-make-a-gesture-based-intelligent-appliance-control-robot-75e26eee8b10",
        name: "How to Make a Gesture Based Intelligent Appliance Control Robot",
        sub: "Published on Apr 5, 2023",
        img: "https://img-c.udemycdn.com/course/480x270/4503190_0ad9_2.jpg"
    }
]

export {projects, Workdata, Headdata, Workbody, Articles}