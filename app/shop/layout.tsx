"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout:React.FC<{children:ReactNode}> = ({children}) => {
    const path = usePathname()

  return (
    <div className='w-[1200px] mx-auto'>
        <h2>Home / Shop {path.includes("shopping-card") ? "/ Shopping Card" : ''}</h2>
        {children}
    </div>
  )
}

export default layout