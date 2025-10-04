import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../api/mockServer'


export default function ScheduledPayments(){
const [list, setList] = useState<any[]>([])
const [from, setFrom] = useState('')
const [to, setTo] = useState('')
const [amount, setAmount] = useState<number|''>('')


useEffect(()=>{ api.listScheduled().then(setList) }, [])


const add = async ()=>{
const job = await api.addScheduled({ from, to, amount: Number(amount), runAt: new Date().toISOString() })
setList(prev=>[job,...prev])
}


return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Scheduled Payments</h2>
<div className="bg-white p-4 rounded shadow max-w-md">
<label>From</label>
<input className="w-full p-2 border rounded mb-2" value={from} onChange={e=>setFrom(e.target.value)} />
<label>To</label>
<input className="w-full p-2 border rounded mb-2" value={to} onChange={e=>setTo(e.target.value)} />
<label>Amount</label>
<input className="w-full p-2 border rounded mb-2" value={amount as any} onChange={e=>setAmount(Number(e.target.value))} />
<button onClick={add} className="p-2 bg-sky-600 text-white rounded">Create</button>
</div>
<div className="mt-4">
<h3 className="font-semibold">Upcoming</h3>
<ul className="space-y-2 mt-2">
{list.map(l=> <li key={l.id} className="bg-white p-3 rounded shadow">{l.from} → {l.to} — ₹{l.amount}</li>)}
</ul>
</div>
</Layout>
)
}
