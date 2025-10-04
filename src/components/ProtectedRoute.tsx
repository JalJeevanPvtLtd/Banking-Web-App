import React from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute({ children, auth, role = 'user' }: { children: React.ReactNode; auth: any; role?: string }) {
if (!auth?.user) return <Navigate to="/login" replace />
// in demo auth.user.role may be undefined; treat sessionRole
if (role === 'admin' && auth.user?.role !== 'admin') return <Navigate to="/" replace />
return <>{children}</>
}
