import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../api/mockServer'


export default function Transfer(){
const [accs, setAccs] = useState<any[]>([])
const [from, setFrom] = useState('')
const [to, setTo] = useState('')
const [amount, setAmount] = useState<number|''>('')
const [msg, setMsg] = useState('')


useEffect(()=>{ api.getAccounts().then(setAccs) }, [])


const submit = async (e:any)=>{
e.preventDefault()
try{
await api.transfer(from, to, Number(amount))
setMsg('Transfer successful')
}catch(err:any){ setMsg(err.message) }
}


return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Transfer</h2>
<form onSubmit={submit} className="bg-white p-4 rounded shadow max-w-md">
<label className="block">From</label>
<select className="w-full p-2 border rounded mb-2" value={from} onChange={e=>setFrom(e.target.value)}>
<option value="">Select</option>
{accs.map(a=> <option key={a.id} value={a.id}>{a.name} — {a.number}</option>)}
</select>
<label>To</label>
<select className="w-full p-2 border rounded mb-2" value={to} onChange={e=>setTo(e.target.value)}>
<option value="">Select</option>
{accs.map(a=> <option key={a.id} value={a.id}>{a.name} — {a.number}</option>)}
</select>
<label>Amount</label>
<input className="w-full p-2 border rounded mb-2" value={amount} onChange={e=>setAmount(Number(e.target.value))} />
<button className="bg-sky-600 text-white p-2 rounded">Send</button>
{msg && <div className="mt-2 text-sm">{msg}</div>}
</form>
</Layout>
)
}