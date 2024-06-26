import Link from 'next/link';

interface WorkProps {
    id: string;
    Title: string;
    Sub: string;
    Img: string;
}

const Workcard: React.FC<WorkProps> = ({Title, Sub, Img, id}) => {
    const containsHttps = id.includes("https") ? true : false;
    let linkis ="/work/"+id
    if(containsHttps){
        linkis=id
    }
    return (
        <Link href={linkis}>
    <div className="rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors  focus-within:bg-neutral-300 hover:bg-neutral-300 ">
        <div className="flex justify-between content-between">
            <div className="s">
                <h2 className="text-black text-2xl">{Title}</h2>
                <h3 className="text-neutral-500 text-base">{Sub}</h3>
            </div>
            <div>
                <img src="https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg" alt="" />
            </div>
        </div>
        <div className="divide-y divide-neutral-400 pb-10">
            <div className="d"> </div>
            <div className="d"> </div>
        </div>
        <div>
            <img src={Img} alt="IHH Player" />
        </div>
    </div>
</Link>
    );
};

export default Workcard