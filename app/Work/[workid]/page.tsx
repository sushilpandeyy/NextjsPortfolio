'use client'

import { usePathname } from 'next/navigation';
import { Headline, Sidebar, Headbod} from '@/app/components/Propcomp';
import { Workdata, Headdata, Workbody} from '@/data/info';
import Menuhead from '@/app/components/Menuhead';

interface MyRole {
    item: string;
}

interface Member {
    name: string;
    link: string;
}

interface Workobj {
    id: string;
    name: string;
    sub: string;
    role: MyRole[];
    team: Member[];
    stack: MyRole[];
    time: string;
}

function filterData(items: Workobj[], workid: string): Workobj | null {
    return items.find(item => item.id === workid) || null;
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

function FFilterbio(items: workheadobj[], workid: string): workheadobj | null {
    return items.find(item => item.id === workid) || null;
}

interface workbodybj{
    id: string;
    img: string;
}

function filterwb(items: workbodybj[], workid: string): workbodybj | null {
    return items.find(item => item.id === workid) || null;
}

const DynamicPage = () => {
    const pathname = usePathname();
    
    function getIdFromPath(path: string): string {
        const startIndex: number = 6;
        if (startIndex !== -1) {
            return path.substring(startIndex, path.length);
        }
        return '';
    }
    
    const workid = getIdFromPath(pathname);
    const filteredWork:any = filterData(Workdata, workid);
    const filterbio:any = FFilterbio(Headdata, workid);
    const filterbody:any = filterwb(Workbody, workid);
    return (
        <>
        {filteredWork ? (
            <>
            <div className="m-10 mt-1">
            <Menuhead
              key="SUSHIL"
              Title="Work"
              />
            </div>
            <div className="md:m-10 m-5 mt-2 mb-5 rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors">
             <Headline
             id={filteredWork.id}
             name={filteredWork.name}
             sub={filteredWork.sub}
               />
            <div className="md:flex grid md:content-start md:justify-start">
                <div className="md:w-1/3 order-2 md:order-1">
                  <Sidebar
                        id={filteredWork.id}
                        name={filteredWork.name}
                        sub={filteredWork.sub}
                        role={filteredWork.role}
                        team={filteredWork.team}
                        stack={filteredWork.stack}
                        time={filteredWork.time}
                    />
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                <Headbod
                    id={filterbio.id}
                    Description={filterbio.Description}
                    Context={filterbio.Context}
                    Buttons={filterbio.Buttons}
                />
                </div>
            </div>
            </div>
            <div className="ml-20 mr-20 rounded-md p-3 ">
            <img src={filterbody.img} className='rounded-md' alt="" />
            </div>
            </>
        ) : (
            <p>Work with ID {workid} not found.</p>
        )}
        </>
    );
}

export default DynamicPage;
