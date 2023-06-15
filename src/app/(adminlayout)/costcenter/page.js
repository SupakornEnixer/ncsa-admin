'use client'
import { Button, Col, Input, Row, Select } from 'antd'
import style from './style.module.css'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const { Search } = Input

export default function CostCenterPage() {

  const router = useRouter()

  useEffect(() => {
    router.prefetch('/costcenter/add')

    return () => {

    }
  }, [router])


  return (
    <>
      <div className={style.head_panel}>
        <div className={style.title}>
          <h2>โครงการ</h2>
          <span>รายการ</span>
        </div>
        <div>
          <Button type="primary" size={'large'} icon={<PlusCircleOutlined />} onClick={() => router.push('/costcenter/add')}>
            เพิ่มข้อมูล
          </Button>
        </div>
      </div>
      <div className={style.content}>
        <Row>
          <Col lg={{ span: 8 }} md={{ span: 12 }}>
            <div className={style.filter}>
              <span>เลขที่</span>
              <Input size={'large'} className={style.input} />
            </div>
            <div className={style.filter}>
              <span>ชื่อโครงการ</span>
              <Input size={'large'} className={style.input} />
            </div>
          </Col>
          <Col lg={{ span: 8 }} md={{ span: 12 }}>
            <div className={style.filter}>
              <span>ผู้จัดทำ</span>
              <Search size={'large'} className={style.input} />
            </div>
            <div className={style.filter}>
              <span>ผู้อนุมัติ</span>
              <Search size={'large'} className={style.input} />
            </div>
            <div className={style.filter}>
              <span>สถานะการอนุมัติ</span>
              <Select allowClear options={[{ value: 'open', label: 'เปิด' }, { value: 'close', label: 'ปิด' }]} className={style.input} />
            </div>
          </Col>
          <Col lg={{ span: 8 }} md={{ span: 12 }}>
            <div className={style.filter}>
              <span>วันที่เริ่มต้น</span>
              <Input size={'large'} className={style.input} />
            </div>
            <div className={style.filter}>
              <span>วันที่สิ้นสุด</span>
              <Input size={'large'} className={style.input} />
            </div>
            <div className={style.filter}>
              <span>สถานะ</span>
              <Select allowClear options={[{ value: 'open', label: 'เปิด' }, { value: 'close', label: 'ปิด' }]} className={style.input} />
            </div>
          </Col>
        </Row>
        <div className={style.button_panel}>
          <Button type="primary" size={'large'} >
            ค้นหา
          </Button>
          <Button size={'large'} >
            เคลียร์
          </Button>
        </div>
      </div >
    </>
  )
}
