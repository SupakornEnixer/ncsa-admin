'use client'
import React, { useState } from 'react'
import style from './table.module.css'

function NcsaTable({ columns = [], rows = [], enableCheckedRow = true }) {

  const [rowData, setRowData] = useState(rows)
  const [selectedLists, setSelectedLists] = useState([])
  const checkedAll = selectedLists?.length === rowData?.length

  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tr}>
          {
            enableCheckedRow && rowData?.length !== 0
              ? <th className={style.th_checkbbox}>
                <input
                  type='checkbox'
                  className={style.checkbox}
                  checked={checkedAll}
                  onChange={() => {
                    if (checkedAll) {
                      setSelectedLists([])
                      return
                    }
                    setSelectedLists(rowData)
                  }}
                />
              </th>
              : null
          }
          {
            columns?.map((c, colIndex) => {
              return (
                <th key={colIndex} className={style.th}>
                  <div style={{ textAlign: c?.headerAlign ?? 'center' }}>
                    <span>{c?.header}</span>
                  </div>
                </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          rowData?.map((r, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className={style.tr}
                style={{
                  backgroundColor: selectedLists?.some(s => s === r) ? '#ededed' : 'white'
                }}>
                {
                  enableCheckedRow
                    ? <td className={style.td_checkbbox}>
                      <input
                        type='checkbox'
                        className={style.checkbox}
                        checked={selectedLists?.some(sl => sl === r)}
                        onChange={() => {
                          if (selectedLists?.some(sl => sl === r)) {
                            setSelectedLists(selectedLists?.filter(ss => ss !== selectedLists?.find(s => s === r)))
                            return
                          }
                          setSelectedLists([...selectedLists, r])
                        }}
                      />
                    </td>
                    : null
                }
                {
                  columns?.map((cc, ii) => {
                    return (
                      <td
                        className={style.td}
                        style={{ textAlign: cc?.alignHeaderCenter ? 'center' : null }}
                        key={ii}>
                        {
                          cc?.render
                            ? cc?.render(cc[r.accessorKey], r)
                            : r?.[cc.accessorKey]
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}

export default NcsaTable