import { useState } from 'react'
import { api } from '../api/mockServer'


export function useAuth() {
const [user, setUser] = useState<any>(null)
const [token, setToken] = useState<string | null>(null)
const enableMFA = async () => api.enableMFA()
const verifyMFA = async (code:string) => api.verifyMFA(code)
const disableMFA = async () => api.disableMFA()


const login = async (username: string, password: string) => {
const res = await api.login(username, password)
setUser(res.user)
setToken(res.token)
return res
}


const logout = () => { setUser(null); setToken(null) }


return { user, token, login, logout, enableMFA, verifyMFA, disableMFA }
}
