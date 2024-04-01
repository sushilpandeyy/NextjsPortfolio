import Menuhead from "../components/Menuhead"
import { Articles } from "@/data/info"
import Workcard from "../components/Workcard";

interface artobj{
    id: string;
    name: string;
    sub: string;
    img: string;

}

function spitcards(item:artobj){
    return (
        <>
        <Workcard
        id={item.id}
        Title={item.name}
        Sub={item.sub}
        Img={item.img}
        />
        </>
    )
}
export default function Article(){
    return (
        <>
        <div className="m-10 mt-1">
    <Menuhead
    key="SUSHIL"
    Title="Article"
    />
    </div>
    <div className="grid md:m-8 md:grid-cols-3 gap-4 m-4">
    {Articles.map(spitcards)}
    </div>
        </>
    )
}