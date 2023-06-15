'use client'
import { Breadcrumb, Button, Dropdown } from 'antd'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import { CloseCircleOutlined, CopyOutlined, DeleteOutlined, EyeOutlined, MenuOutlined, PlusCircleOutlined, PrinterOutlined } from '@ant-design/icons'

export default function CostCenterEditPage() {

  const router = useRouter()

  const items = [
    {
      label: <><PlusCircleOutlined /> สร้างใหม่</>,
      key: '0',
    },
    {
      label: <><CopyOutlined /> คัดลอก</>,
      key: '1',
    },
    {
      label: <><EyeOutlined /> ดูตัวอย่าง</>,
      key: '3',
    },
    {
      label: <><PrinterOutlined /> พิมพ์</>,
      key: '4',
    },
    {
      label: <><CloseCircleOutlined /> ยกเลิก</>,
      key: '5',
    },
    {
      label: <><DeleteOutlined /> ลบ</>,
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
