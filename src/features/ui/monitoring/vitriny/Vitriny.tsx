import DataTableDashboard, { DataRowType } from "../../../../common/components/DataTableDashboard/DataTableDashboard"

const dataRow: DataRowType = {
  "Ключ 1": "Значение 1",
  "Ключ 2": "Значение 2",
  "Ключ 3": "Значение 3",
  "Ключ 4": "",
}

export const Vitriny = () => {
  return <DataTableDashboard title="Витрины" dataRow={dataRow} />
}
