import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../api/mockServer'


export default function Admin(){
const [logs, setLogs] = useState<any[]>([])
useEffect(()=>{ api.getAudit().then(setLogs) }, [])
return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
<div className="bg-white p-4 rounded shadow">
<h3 className="font-semibold">Audit Logs</h3>
<ul className="mt-2 space-y-2 text-sm">
{logs.map(l=> <li key={l.time}>{l.time} — {l.type} — {JSON.stringify(l)}</li>)}
</ul>
</div>
</Layout>
)
}
