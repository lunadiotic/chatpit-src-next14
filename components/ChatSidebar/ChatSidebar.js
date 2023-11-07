import Link from 'next/link'
import React from 'react'

export default function ChatSidebar() {
    return (
        <div className='text-white bg-slate-700'>
            <Link href="/api/auth/logout">Logout</Link>
        </div>
    )
}
