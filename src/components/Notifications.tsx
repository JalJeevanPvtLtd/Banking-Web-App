import React, { useEffect, useState } from 'react'
import { notifications } from '../api/mockServer'


export default function Notifications(){
const [items, setItems] = useState<any[]>([])
useEffect(()=>{
const unsub = notifications.subscribe((m)=> setItems(prev => [m, ...prev].slice(0,20)))
return unsub
},[])
return (
<div className="w-80 shadow bg-white rounded p-2">
<div className="font-semibold mb-2">Notifications</div>
{items.length===0 && <div className="text-sm text-slate-500">No notifications</div>}
<ul className="text-sm space-y-2">
{items.map(i=> (
<li key={i.id} className="border-b pb-2">
<div className="font-medium">{i.title}</div>
<div className="text-xs text-slate-500">{i.body}</div>
</li>
))}
</ul>
</div>
)
}
