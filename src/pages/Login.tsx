import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


export default function Login() {
const [u, setU] = useState('')
const [p, setP] = useState('')
const [err, setErr] = useState<string | null>(null)
const auth = useAuth()
const nav = useNavigate()


const submit = async (e: any) => {
e.preventDefault()
try {
await auth.login(u, p)
nav('/')
} catch (e: any) { setErr(e.message) }
}


return (
<div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Sign in</h2>
{err && <div className="text-sm text-red-600 mb-2">{err}</div>}
<form onSubmit={submit} className="space-y-3">
<input value={u} onChange={e=>setU(e.target.value)} placeholder="username" className="w-full p-2 border rounded" />
<input type="password" value={p} onChange={e=>setP(e.target.value)} placeholder="password" className="w-full p-2 border rounded" />
<button className="w-full bg-sky-600 text-white p-2 rounded">Sign in</button>
</form>
<div className="text-sm text-slate-500 mt-3">Try <code>user</code> / <code>pass</code></div>
</div>
)
}