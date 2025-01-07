import DataTableDashboard, { DataRowType } from "../../../common/components/DataTableDashboard/DataTableDashboard"

const dataRow: DataRowType = {
  Начало: "Значение 1",
  Конец: "Значение 2",
}

export const WorkingHoursBISS = () => {
  return <DataTableDashboard title={"Время работы BISS"} dataRow={dataRow} />
}
