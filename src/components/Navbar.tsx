import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<nav className="bg-white shadow">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="font-semibold text-lg">Demo Bank</div>
<div className="space-x-3">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/account" className="hover:underline">Accounts</Link>
<Link to="/transfer" className="hover:underline">Transfer</Link>
<Link to="/settings" className="hover:underline">Settings</Link>
</div>
</div>
</nav>
)
}