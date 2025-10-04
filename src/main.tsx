import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Account from './pages/Account'
import Transfer from './pages/Transfer'
import Settings from './pages/Settings'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './hooks/useAuth'


function AppRoutes(){
const auth = useAuth()
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/" element={<ProtectedRoute auth={auth}><Home /></ProtectedRoute>} />
<Route path="/account" element={<ProtectedRoute auth={auth}><Account /></ProtectedRoute>} />
<Route path="/transfer" element={<ProtectedRoute auth={auth}><Transfer /></ProtectedRoute>} />
<Route path="/settings" element={<ProtectedRoute auth={auth}><Settings /></ProtectedRoute>} />
</Routes>
</BrowserRouter>
)
}