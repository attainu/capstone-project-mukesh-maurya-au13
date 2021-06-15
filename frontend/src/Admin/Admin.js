import React from 'react'
import AdminComponent from './AdminComponent'
import "./Admin.css";
import AdminSidebar from './AdminSidebar';

const Admin = () => {
  return (
    <div className="Admin">
      <AdminSidebar/>
      <AdminComponent/>
    </div>
  )
}

export default Admin;