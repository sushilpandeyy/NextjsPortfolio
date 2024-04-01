import { Twitter, Twitter2 } from "./Components";
import { Minimenu } from "./Propcomp"
import Image from 'next/image';
import { Description, IhhComp } from "./Components";



export default function About(){
    return (<>
    <div className="lg:flex flex-nowrap content-start justify-between m-2 sm:flex-wrap sm:m-0 m-2">
    <div className="s1 lg:w-1/2	md:text-base text-base p-1">
    <Description/>
    </div>
    <div className="s2 lg:w-1/2 p-4">
    <IhhComp/>
    <div className="sm:block lg:flex content-start justify-center">
    </div>
    </div>
    </div>
    </>)
}