'use client'
import NcsaTable from '@/components/table/table'
import { useMemo } from 'react'

function DashboardPage() {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'address',
        header: 'ที่อยู่',
        headerAlign: 'start'
      },
      {
        accessorKey: 'option',
        header: '',
        render: (_, row) => {
          return (
            <>ดูรายละเอียด</>
          )
        }
      }
    ],
    [],
  )

  const rows = [
    { id: 1, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 2, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 3, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 4, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 5, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 6, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 7, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 8, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
    { id: 9, address: '1047 ถนน ตากสิน ซอย ตากสิน 22 บุคคโล ธนบุรี กรุงเทพมหานคร 10600' },
  ]

  return (
    <div>
      <NcsaTable columns={columns} rows={rows} />
    </div>
  )
}

export default DashboardPage