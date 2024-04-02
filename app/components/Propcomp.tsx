import Link from 'next/link';

interface MinimenuProps {
    Title: string;
    URL: string;
    Side: string;
    Pro: string;
    key: string
}

const Minimenu: React.FC<MinimenuProps> = ({ Title, URL, Side, Pro }) => {
    return (
        <>
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
                <div>
                    <span className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underlinep text-base">{<Link href={URL}>{Title}</Link>} . {Side}</span>
                </div>
                <div>
                    <Link href={Pro}><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg" alt="" /></Link>
                </div>
            </div>
        </>
    );
};


interface BlogProps {
    key: string;
    Title: string;
    URL: string;
    Date: string;
    Description: string;
}

const Blogcard: React.FC<BlogProps> = ({Title, URL, Description, Date}) => {
    return (
        <>
        <div className="rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors  focus-within:bg-neutral-300 hover:bg-neutral-300 ">
        <Minimenu 
                key="BLOG"
                Title="Articles"
                URL="/article"
                Pro="https://contactsushil.medium.com/experience-of-participating-in-online-hackathon-c58987dc45ea"
                Side=""
            />
        <div className='flex flex-col h-4/5 content-end justify-end mt-10'>    
        <h2 className='text-xl fblog'>{Title}</h2>
        <h3 className='text-sm m-0.5 fiblog'>{Date}</h3>
        <p className="description fiiblog">{Description}</p>
        </div>
        </div>
        </>
    )
}

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

interface Headlineobj {
    id: string;
    name: string;
    sub: string;
}

const Headline: React.FC<Headlineobj> = ({id, name, sub}) => {
    return (
        <>
        <h1 className='text-3xl'>{name}</h1>
        <h2 className='text-lg text-neutral-500'>{sub}</h2>
        <div className="divide-y divide-neutral-400 pb-10">
                    <div className="d"> </div>
                    <div className="d"> </div>
        </div>
        </>
    )
}

function spitli(item:myrole){
    return (
        <li className='text-sm'>
            {item.item}
        </li>
    )
}

function spitlii(item:member){
    return (
        <li className='text-sm'>
            <Link href={item.link}>{item.name}</Link>
        </li>
    )
}

const Sidebar: React.FC<Workobj> = ({role, team, stack, time}) => {
    return (
        <>
        <h3 className='text-lg text-neutral-500'>MY ROLE</h3>
        <ul>{role.map(spitli)}</ul>
        <h3 className='text-lg mt-4 text-neutral-500'>TEAM</h3>
        <ul>{team.map(spitlii)}</ul>
        <h3 className='text-lg mt-4 text-neutral-500'>TOOLS</h3>
        <ul>{stack.map(spitli)}</ul>
        <h3 className='text-lg	mt-4 text-neutral-500'>TIMELINE</h3>
        <ul>
            <li className='text-sm'>{time}</li>
        </ul>
        </>
    )
}

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

function spitbtn(item:btnobj){
    return (
        <Link href={item.link}>
        <button className="text-base bg-white text-gray-800 px-8 py-3 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 transition duration-300 shadow-md">
         {item.title}
        </button>
    </Link>
    )
}

const Headbod: React.FC<workheadobj> = ({Description, Context, Buttons}) => {
    return (
        <>
        <h3 className='text-lg text-neutral-500 mb-2'>DESCRIPTION</h3>
        <article className='text-black  mb-10'>{Description}</article>
        <h3 className='text-lg text-neutral-500 mb-2'>CONTEXT</h3>
        <article className='text-black mb-10'>{Context}</article>
        <div className="flex content-start justify-center">
            {Buttons.map(spitbtn)}
        </div>
        </>
    )
}

export { Minimenu, Blogcard, Headline, Sidebar, Headbod};

