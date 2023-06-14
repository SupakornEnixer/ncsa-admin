'use client'
import React from 'react'
import { Layout, theme } from 'antd'
import { useState } from 'react'
import Sidebar from '@/components/admin-layout/sidebar'
import Appbar from '@/components/admin-layout/appbar'
const { Content } = Layout

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Appbar collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
export default AdminLayout