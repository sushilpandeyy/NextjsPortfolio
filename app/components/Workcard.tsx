import Link from 'next/link';

interface WorkProps {
    key: string;
    Title: string;
    Sub: string;
}

const Workcard: React.FC<WorkProps> = ({Title, Sub}) => {
    return (
        <>
            <div className="rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors  focus-within:bg-neutral-300 hover:bg-neutral-300 ">
                <div className="flex justify-between content-between">
                    <div className="s">
                        <h2 className="text-black text-2xl">{Title}</h2>
                        <h3 className="text-neutral-500 text-base">{Sub}</h3>
                    </div>
                    <div>
                    <Link href={""}><img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg" alt="" /></Link>
                </div>
                </div>
                <div className="divide-y divide-neutral-400 pb-10">
                    <div className="d"> </div>
                    <div className="d"> </div>
                </div>
                <div>
                <img src="https://res.cloudinary.com/djug8zfu7/image/upload/v1710139256/x9ziaczvderovrbyd39p.png" alt="IHH Player"/>
            </div>
            </div>
        </>
    );
};

export default Workcard