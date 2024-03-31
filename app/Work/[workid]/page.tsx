'use client'

import { usePathname } from 'next/navigation';

const DynamicPage = () => {
    const pathname = usePathname();

    function getIdFromPath(path: string) {
        const startIndex:number = 6;
        if (startIndex != -1) {
            return path.substring(startIndex, path.length);
        }
        return null;
    }

    const workid = getIdFromPath(pathname);

    return (
        <>
            sds {workid}
        </>
    );
}

export default DynamicPage;
