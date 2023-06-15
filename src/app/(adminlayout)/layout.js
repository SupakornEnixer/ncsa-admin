'use client'
import React from 'react'
import { Layout, theme } from 'antd'
import { useState } from 'react'
import Sidebar from '@/components/admin-layout/sidebar'
import Appbar from '@/components/admin-layout/appbar'
const { Content } = Layout

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ padding: '1.5rem' }}>
        <Appbar collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
        <div style={{ paddingTop: '2rem' }}>
          {children}
        </div>
      </Layout>
    </Layout>
  )
}
export default AdminLayout