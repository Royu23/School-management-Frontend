import React from 'react'
import { Routes } from 'react-router-dom'
import AdminLogin from '../pages/AdminLogin'

const AdminRoutes = () => {
  return (
    <div>
        <Routes path="/" element={<AdminLogin />}></Routes>
    </div>
  )
}

export default AdminRoutes