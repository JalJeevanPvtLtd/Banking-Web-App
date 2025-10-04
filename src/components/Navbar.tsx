import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Notifications from './Notifications'


export default function Navbar() {
const [open, setOpen] = useState(false)
return (
<nav className="bg-white shadow">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="font-semibold text-lg">Demo Bank</div>
<div className="flex items-center space-x-3">
<Link to="/account" className="hover:underline">Accounts</Link>
<Link to="/transfer" className="hover:underline">Transfer</Link>
<div className="relative">
<button onClick={()=>setOpen(s=>!s)} className="p-2 rounded-full hover:bg-slate-100">🔔</button>
{open && <div className="absolute right-0 mt-2"><Notifications /></div>}
</div>
<Link to="/settings" className="hover:underline">Settings</Link>
</div>
</div>
</nav>
)
}
