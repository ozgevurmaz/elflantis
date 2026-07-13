import { NAV_CONFIG } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex felx-col items-center justify-start gap-2">
            <Image
                src={NAV_CONFIG.logo}
                alt={NAV_CONFIG.brandName}
                width={24}
                height={24}
                className="h-auto w-auto"
            />
            <span className="text-[15px] font-semibold tracking-tight text-ink-900">
                {NAV_CONFIG.brandName}
            </span>
        </div>
    )
}

export default Navbar