import { v4 as uuid } from 'uuid'


type Account = {
id: string
name: string
number: string
balance: number
}


type Transaction = {
id: string
from: string
to: string
amount: number
date: string
desc?: string
}


const accounts: Account[] = [
{ id: 'acc-1', name: 'Checking', number: 'XXXX-1234', balance: 5400 },
{ id: 'acc-2', name: 'Savings', number: 'XXXX-5678', balance: 12000 }
]


let transactions: Transaction[] = [
{ id: uuid(), from: 'acc-1', to: 'Store', amount: 30, date: new Date().toISOString(), desc: 'Groceries' },
{ id: uuid(), from: 'acc-1', to: 'acc-2', amount: 200, date: new Date().toISOString(), desc: 'Transfer to savings' }
]


export const api = {
login: async (username: string, password: string) => {
await new Promise((r) => setTimeout(r, 400))
if (username === 'user' && password === 'pass') {
return { token: 'fake-jwt-token', user: { name: 'Demo User', id: 'user-1' } }
}
throw new Error('Invalid credentials')
},
getAccounts: async () => {
await new Promise((r) => setTimeout(r, 200))
return accounts
},
getTransactions: async (accountId?: string) => {
await new Promise((r) => setTimeout(r, 200))
return transactions.filter(t => !accountId || t.from === accountId)
},
transfer: async (fromId: string, toId: string, amount: number) => {
await new Promise((r) => setTimeout(r, 300))
const from = accounts.find(a => a.id === fromId)
const to = accounts.find(a => a.id === toId)
if (!from || from.balance < amount) throw new Error('Insufficient funds')
from.balance -= amount
if (to) to.balance += amount
const tx = { id: uuid(), from: fromId, to: toId, amount, date: new Date().toISOString() }
transactions.unshift(tx)
return tx
}
}


// Simple event emitter for notifications
const listeners: ((msg: any) => void)[] = []
export const notifications = {
subscribe: (cb: (msg: any) => void) => { listeners.push(cb); return () => { const i = listeners.indexOf(cb); if (i>=0) listeners.splice(i,1); } },
push: (msg: any) => { listeners.forEach(l => l(msg)) }
}

// add field to user session
let userMFA: { enabled: boolean; secret?: string; backup?: string[] } = { enabled: false }


export const api = {
// ... existing
enableMFA: async () => {
const secret = Math.random().toString(36).slice(2, 10)
userMFA = { enabled: true, secret, backup: [secret.slice(0,4)+'-A', secret.slice(4)+'-B'] }
return { secret, backup: userMFA.backup }
},
verifyMFA: async (code: string) => {
if (!userMFA?.enabled) throw new Error('MFA not enabled')
return code === userMFA.secret?.slice(-4)
},
disableMFA: async () => { userMFA = { enabled: false }; return true }
}
