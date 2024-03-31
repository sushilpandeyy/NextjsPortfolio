'use client'

import { usePathname } from 'next/navigation';
import { Headline, Sidebar } from '@/app/components/Propcomp';
import { Workdata } from '@/data/info';
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
            <div className="m-20 mt-2 rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors ">
             <Headline
             id={filteredWork.id}
             name={filteredWork.name}
             sub={filteredWork.sub}
               />
            <div className="flex content-start justify-start">
                <div className="w-1/3">
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
                <div className="w-2/3">
                    2/3
                </div>
            </div>
            </div>
            </>
        ) : (
            <p>Work with ID {workid} not found.</p>
        )}
        </>
    );
}

export default DynamicPage;
