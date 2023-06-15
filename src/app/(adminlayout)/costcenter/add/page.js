'use client'
import { Breadcrumb, Button, Dropdown } from 'antd'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import { MenuOutlined } from '@ant-design/icons'

export default function CostCenterAddPage() {

  const router = useRouter()

  const items = [
    {
      label: 'สร้างใหม่',
      key: '0',
    },
    {
      label: 'คัดลอก',
      key: '1',
    },
    {
      label: 'ดูตัวอย่าง',
      key: '3',
    },
    {
      label: 'พิมพ์',
      key: '4',
    },
    {
      label: 'ยกเลิก',
      key: '5',
    },
    {
      label: 'ลบ',
      key: '6',
    },
  ]

  return (
    <>
      <div className={style.head_panel}>
        <div className={style.title}>
          <h2>โครงการ</h2>
          <Breadcrumb
            separator={'>'}
            items={[
              {
                title: 'รายการ',
                onClick: () => router.back()
              },
              {
                title: 'เพิ่มข้อมูล'
              }
            ]}
          />
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <Button onClick={(e) => e.preventDefault()}>
              <MenuOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
