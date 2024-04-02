
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
        time: "Dec 2020 - Dec 2023"
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
        time: "Mar 2019 - Present"
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
        time: "May 2018 - March 2022"
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
        Description: "A decentralized news application incorporating a layer of ML model.",
        Context: "We developed a platform for independent journalists to practice journalism without relying on any organized body. Recognizing the various influences on these organizations, which can lead to bias, we aimed to build a decentralized platform. However, this presented a new challenge of fake news, which we addressed by creating an ML model. This model instantly evaluates the likelihood of news being fake and flags it with a corresponding rating.",
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
        Description: "Buitl a product from start to finish at Myraa Technology",
        Context: "During my time at Myraa Technology, I helped develop a new product from scratch. I started by working on the backend using a framework called Tornado, where I built APIs and connected them to our database. After setting up the backend, I hosted everything on AWS and created databases using MySQL. Throughout the project, I focused on making sure everything ran smoothly and was easy to use. I also worked on improving how the product looked and felt to users. Communication with the team was important, and together we achieved many goals, like setting up servers and adding new features. Overall, I played a key role in making sure our project was successful and could grow in the future.",
        Buttons: [
            {
                title: "Case Study",
                link: "https://contactsushil.medium.com/full-stack-development-intern-experience-e5bf1a3625bb"
            },
        ],
    },
    {
        id: "ihh",
        Description: "IHH Player is an audio streaming app that focuses on Indian Hip-Hop.",
        Context: "I built the IHH Player to listen to the music I want without Spotify ads. Its frontend was developed using ReactJS deployed on Vercel, while the backend server was built with Express deployed on an AWS EC2 instance, along with an S3 bucket for hosting audio files. For the database, I'm using PostgreSQL hosted on the free tier of Neon.tech. There are multiple features in the pipeline, which I plan to deploy soon.",
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
        Description: "A data analysis application that enables users to analyze various types of data.",
        Context: "I developed a full-stack application aimed at visualizing diverse datasets. This project served as a learning endeavor during which I adhered to industry standards. Leveraging the MERN stack, we implemented CRUD operations by constructing APIs and deploying the Express server on OnRender. The frontend, crafted with React and Material UI, is hosted on Vercel. Although the current version isn't mobile-compatible due to its complexity, I plan to make it mobile-friendly in the near future.",
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
        Description: "Task Management Chrome Extension",
        Context: "In college, I participated in a hackathon called HackSRM4.0, where our team aimed to address the issue of online distractions by developing a Chrome extension. This extension facilitated task management by allowing users to create to-do lists and focus on their work, blocking distracting websites once they began their tasks. Our solution also included features such as leaderboards and other essential functionalities. Our team was runner-up in that hackathon.",
        Buttons: [
            {
                title: "Github",
                link: "https://github.com/sushilpandeyy/HackSRM4.0"
            },
            {
                title: "Devfolio",
                link: "https://devfolio.co/projects/disstract-d051"
            },
            {
                title: "Blog",
                link: "https://contactsushil.medium.com/experience-of-participating-in-online-hackathon-c58987dc45ea"
            },
        ],
    },
    {
        id: "everydukan",
        Description: "An All-in-One Shopping Application designed to streamline the shopping experience by providing access to multiple online shopping platforms within a single interface.",
        Context: "Everydukan was conceived as a comprehensive shopping application, offering access to over 21 different shopping platforms within a single interface, thus enabling users to conserve significant storage space on their devices. In our later stages, we aimed to implement a model where users could benefit from our affiliate earnings, akin to the approach employed by platforms like CashKaro. However, unforeseen circumstances arose, leading to the discontinuation of the project. Nonetheless, the application remains available on the Play Store.",
        Buttons: [
            {
                title: "Playstore",
                link: "https://play.google.com/store/apps/details?id=com.dukan.every"
            },
            
        ],
    },
    {
        id: "vpn",
        Description: "Built a budget-friendly and accessible VPN service application.",
        Context: "While engaged in various projects, my team and I collaborated to develop a VPN application. We aimed to offer competitive pricing while ensuring reliable VPN access for our users. Some users even opted for our premium plans. To promote our application, we utilized platforms like Quora, Google Ads, and other marketing strategies. However, our journey took an unexpected turn due to policy violations that we were unable to rectify, leading to the suspension of our application.",
        Buttons: [],
    },
    {
        id: "wejobstation",
        Description: "A unified platform for accessing the latest government job news and educational resources.",
        Context: "While concurrently building websites and digital presences for clients, I initiated my own venture called WeJobStation. This venture comprised an Android application developed with Kodular and a WordPress website, providing comprehensive access to government job news and educational resources. For monetization, I employed AdSense and affiliate marketing strategies. However, due to intense competition in later stages, I made the decision to discontinue this venture.",
        Buttons: [],
    },
    {
        id: "freelancing",
        Description: "I was a freelancer primarily collaborating with small and medium-sized businesses to enhance their online presence.",
        Context: "After gaining valuable experience at Prakash News of India, I recognized the immense potential of establishing an online presence. Motivated by this insight, I began extending my services to assist other small and medium-sized businesses in harnessing the power of the internet. Initially, my focus was on creating WordPress websites, but over time, I diversified my offerings to include Shopify development, SEO, content writing, and digital marketing services. Additionally, I ventured into developing custom basic websites to cater to specific client needs.",
        Buttons: [
            {
                title: "Email Me",
                link: "https://mailto:contact.sushilpandey@gmail.com"
            }
        ],
    },
    {
        id: "pni",
        Description: "In 2018, I had the opportunity to convert a local newspaper into a digital newspaper, and it turned out to be quite successful.",
        Context: "I assisted the head editor of a local weekly newspaper in India, known as Prakash News, in transitioning their publication into the digital realm. Working within their specified requirements and budget, I developed their news website using the Blogger platform. In addition to building the website, I performed SEO optimization to enhance its visibility on search engines. Furthermore, I provided training to their team to ensure smooth operations. This transformation turned a traditional offline newspaper into a thriving digital publication. As a testament to its success, the website garnered a remarkable traffic of 73,000 visitors in a single day.",
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