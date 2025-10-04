import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../api/mockServer'


export default function Account() {
const [accs, setAccs] = useState<any[]>([])
useEffect(()=>{ api.getAccounts().then(setAccs) }, [])
return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Accounts</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{accs.map(a=> (
<div key={a.id} className="bg-white p-4 rounded shadow">
<div className="font-semibold">{a.name}</div>
<div className="text-sm text-slate-500">{a.number}</div>
<div className="mt-2 text-lg">₹{a.balance}</div>
</div>
))}
</div>
</Layout>
)
}