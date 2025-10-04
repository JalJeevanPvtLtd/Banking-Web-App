import React from 'react'
import Layout from '../components/Layout'


export default function Home() {
return (
<Layout>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-4 rounded shadow">Welcome to Demo Bank — sandbox app for PRs.</div>
<div className="bg-white p-4 rounded shadow">Quick links: Accounts, Transfers, Settings</div>
</div>
</Layout>
)
}