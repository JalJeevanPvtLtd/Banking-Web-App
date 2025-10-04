import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { api } from '../api/mockServer'
import { toCSV } from '../utils/csv'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


export default function Dashboard(){
const [tx, setTx] = useState<any[]>([])
useEffect(()=>{ api.getTransactions().then(setTx) }, [])


const series = tx.slice(0,20).map(t=> ({ date: new Date(t.date).toLocaleDateString(), amount: t.amount }))


const exportCSV = ()=>{
const csv = toCSV(tx, ['id','from','to','amount','date','desc'])
const blob = new Blob([csv], { type: 'text/csv' })
const href = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = href; a.download = 'transactions.csv'; a.click()
URL.revokeObjectURL(href)
}


return (
<Layout>
<h2 className="text-xl font-semibold mb-4">Analytics</h2>
<div className="bg-white p-4 rounded shadow">
<div style={{ height: 300 }}>
<ResponsiveContainer width="100%" height="100%">
<LineChart data={series}>
<XAxis dataKey="date" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="amount" stroke="#8884d8" />
</LineChart>
</ResponsiveContainer>
</div>
<div className="mt-4">
<button onClick={exportCSV} className="p-2 bg-sky-600 text-white rounded">Export CSV</button>
</div>
</div>
</Layout>
)
}
