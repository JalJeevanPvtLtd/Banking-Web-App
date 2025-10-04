import React from 'react'
import Navbar from './Navbar'


export default function Layout({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="p-6 max-w-6xl mx-auto w-full">{children}</main>
<footer className="p-4 text-center text-sm text-slate-500">© Demo Bank</footer>
</div>
)
}