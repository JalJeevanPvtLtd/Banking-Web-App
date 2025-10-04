import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../hooks/useAuth'
import { generateMockQRCode } from '../utils/totp'


export default function Settings(){
const auth = useAuth()
const [qr, setQr] = useState<string | null>(null)
const [backup, setBackup] = useState<string[] | null>(null)
const [code, setCode] = useState('')
const [msg, setMsg] = useState('')


const onEnable = async () => {
const res: any = await auth.enableMFA()
setQr(generateMockQRCode(res.secret))
setBackup(res.backup)
}


const onVerify = async () => {
const ok = await auth.verifyMFA(code)
setMsg(ok ? 'MFA verified' : 'Invalid code')
}


const onDisable = async () => { await auth.disableMFA(); setMsg('MFA disabled'); setQr(null); setBackup(null) }


return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Settings</h2>
<div className="bg-white p-4 rounded shadow max-w-md">
<div className="mb-2">Multi-Factor Authentication</div>
{!qr && <button onClick={onEnable} className="p-2 bg-sky-600 text-white rounded">Enable MFA</button>}
{qr && (
<div className="mt-3">
<div>Scan QR with an authenticator app</div>
<img src={qr} alt="qr" className="w-40 h-40 border mt-2" />
<div className="text-sm mt-2">Backup codes:</div>
<ul className="text-xs">{backup?.map(b=> <li key={b}>{b}</li>)}</ul>
<input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter code" className="p-2 border rounded mt-2" />
<div className="space-x-2 mt-2">
<button onClick={onVerify} className="p-2 bg-green-600 text-white rounded">Verify</button>
<button onClick={onDisable} className="p-2 bg-red-600 text-white rounded">Disable</button>
</div>
{msg && <div className="mt-2 text-sm">{msg}</div>}
</div>
)}
</div>
</Layout>
)
}
