'use client'
import { Breadcrumb, Button, Dropdown } from 'antd'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import { CloseCircleOutlined, CopyOutlined, DeleteOutlined, EyeOutlined, MenuOutlined, PlusCircleOutlined, PrinterOutlined } from '@ant-design/icons'

export default function CostCenterAddPage() {

  const router = useRouter()


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
        <div />
      </div>
    </>
  )
}
