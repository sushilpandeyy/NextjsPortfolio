'use client'

import { usePathname } from 'next/navigation';
import { Headline } from '@/app/components/Propcomp';
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
    const filteredWork = filterData(Workdata, workid);

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
            <div className="m-20 rounded-md p-3 h-full rounded-lg bg-neutral-100 transition-colors  focus-within:bg-neutral-300 hover:bg-neutral-300 ">
             <Headline
             id={filteredWork.id}
             name={filteredWork.name}
             sub={filteredWork.sub}
               />
            </div>
            </>
        ) : (
            <p>Work with ID {workid} not found.</p>
        )}
        </>
    );
}

export default DynamicPage;
