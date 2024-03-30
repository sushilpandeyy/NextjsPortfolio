'use client'

import { usePathname } from 'next/navigation'
const dynamicpage = () => {
    const query = usePathname();
    console.log(query)
    return (
        <>
        sds
        </>
    )
}

export default dynamicpage