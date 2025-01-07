import DataTableDashboard, { DataRowType } from "../../../common/components/DataTableDashboard/DataTableDashboard"

const dataRow: DataRowType = {
  "Ключ 1": "Значение 1",
  "Ключ 2": "Значение 2",
  "Ключ 3": "Значение 3",
  "Ключ 4": "Значение 4",
  "Ключ 5": "Значение 5",
}

export const CorrespondentAccount = () => {
  return <DataTableDashboard title="Корсчет" dataRow={dataRow} />
}
