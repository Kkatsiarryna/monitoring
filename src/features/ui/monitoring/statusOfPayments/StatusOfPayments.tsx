import DataTableDashboard, { DataRowType } from "../../../../common/components/DataTableDashboard/DataTableDashboard"

const dataRow: DataRowType = {
  "Ключ 1": "Значение 1",
  "Ключ 2": "Значение 2",
  "Ключ 3": "Значение 3",
  "Ключ 4": "Значение 4",
  "Ключ 5": "Значение 5",
  "Ключ 6": "Значение 6",
  "Ключ 7": "Значение 7",
  "Ключ 8": "Значение 8",
}

export const StatusOfPayments = () => {
  return <DataTableDashboard title="Состояние платежей" dataRow={dataRow} />
}
