import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core"
import { SortableContext, useSortable, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid2"
import React, { useState } from "react"
import { CorrespondentAccount } from "./correspondentAccount/correspondentAccount"
import { WorkingHoursBISS } from "./workingHoursBISS/WorkingHoursBISS"
import { AccessToDatabase } from "./accessToDatabase/AccessToDatabase"
import { StatusOfPayments } from "./statusOfPayments/StatusOfPayments"
import { SMP } from "./smp/SMP"
import { ErrorsOnLinesFP } from "./errorsOnLinesFP/ErrorsOnLinesFP"
import { Vitriny } from "./vitriny/Vitriny"

//Библиотеки @dnd-kit/core и @dnd-kit/sortable используются для перетаскивания

const components: { [key: string]: React.FC } = {
  //Здесь создается объект components, который содержит ссылки на все используемые компоненты
  CorrespondentAccount,
  WorkingHoursBISS,
  AccessToDatabase,
  StatusOfPayments,
  SMP,
  ErrorsOnLinesFP,
  Vitriny,
}

interface DraggableComponentProps {
  //TypeScript-интерфейс для пропсов компонента DraggableComponent
  id: string
  component: React.FC
}

//Компонент DraggableComponent оборачивает переданный ему компонент и добавляет ему возможность перетаскивания с использованием хука useSortable из @dnd-kit/sortable

//Создается функциональный компонент DraggableComponent с пропсами DraggableComponentProps, в которые входят id и component (React-компонент)
const DraggableComponent: React.FC<DraggableComponentProps> = ({ id, component: Component }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  //useSortable – это хук из @dnd-kit/sortable, который добавляет поддержку перетаскивания к элементу.
  //
  // id передается в хук, чтобы связать этот компонент с идентификатором перетаскивания.
  //
  // Хук возвращает объект с различными свойствами и методами:
  //
  // attributes – атрибуты, которые нужно добавить к перетаскиваемому элементу.
  //
  // listeners – слушатели событий для обработки действий перетаскивания.
  //
  // setNodeRef – реф, который нужно установить на элемент, чтобы сделать его перетаскиваемым.
  //
  // transform – объект, содержащий информацию о текущем перемещении элемента.
  //
  // transition – строка, представляющая CSS-переходы.

  const style: React.CSSProperties = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  }
  //Создается объект style для применения стилей к перетаскиваемому элементу.
  //
  // Если transform определен, применяется translate3d для перемещения элемента в пространстве на основе координат x и y.
  //
  // transition применяется для анимации изменений позиции.

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Component />
    </div>
  )
  //Возвращается элемент div, который оборачивает переданный компонент.
  //
  // ref устанавливается на setNodeRef, чтобы сделать элемент перетаскиваемым.
  //
  // Применяются стили style, атрибуты attributes и слушатели событий listeners.
  //
  // Внутри div рендерится перед
}

//Это функциональный компонент React, который определяет интерфейс мониторинга с возможностью сортировки компонентов путем перетаскивания.

export const Monitoring: React.FC = () => {
  const [items, setItems] = useState(Object.keys(components).map(String))
  //Компонент использует хук useState для управления состоянием списка элементов items.
  // Изначально список содержит ключи объектов из components, преобразованные в строки

  const handleDragEnd = (event: DragEndEvent) => {
    //Функция handleDragEnd вызывается, когда пользователь завершает перетаскивание элемента.
    // Она проверяет, если активный элемент active.id отличается от целевого элемента over?.id, и обновляет порядок элементов в items

    //Это объявление функции handleDragEnd, которая принимает параметр event типа DragEndEvent

    const { active, over } = event

    //const { active, over } = event: Это деструктуризация объекта event, которая извлекает значения active и over.
    // active — это элемент, который перемещается,
    // а over — это элемент, над которым active был перемещен

    if (active.id !== over?.id) {
      //if (active.id !== over?.id): Условие проверяет, изменился ли порядок элементов.
      // Если идентификатор перемещаемого элемента active.id отличается от идентификатора целевого элемента over?.id, выполняется код внутри условия
      setItems((items) => {
        //setItems((items) => { ... }): Вызов функции setItems обновляет состояние items.
        // Функция принимает текущее состояние items и возвращает новое состояние.

        const oldIndex = items.indexOf(String(active.id))
        const newIndex = items.indexOf(String(over!.id))
        //const oldIndex = items.indexOf(String(active.id)): Находит текущий индекс перемещаемого элемента в массиве items.
        //
        // const newIndex = items.indexOf(String(over!.id)): Находит новый индекс перемещаемого элемента в массиве items

        return arrayMove(items, oldIndex, newIndex)
        //return arrayMove(items, oldIndex, newIndex):
        // Использует функцию arrayMove для изменения порядка элементов в массиве items, перемещая элемент с индекса oldIndex на индекс newIndex
      })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Container fixed>
          <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "10px 0 0 0" }}>
            {items.map((key) => {
              const Component = components[key]
              return <DraggableComponent key={key} id={key} component={Component} />
            })}
          </Grid>
        </Container>
      </SortableContext>
    </DndContext>
  )
}

//Компонент возвращает JSX, который определяет контекст перетаскивания DndContext
// и список сортируемых элементов SortableContext. Элементы отображаются в сетке Grid

//DndContext: Этот компонент оборачивает все элементы, которые могут быть перетащены. Он использует обработчик
//handleDragEnd для обработки окончания перетаскивания и стратегию обнаружения столкновений closestCenter

//SortableContext Этот компонент оборачивает элементы, которые могут быть сортированы. Он принимает список items и стратегию
//сортировки verticalListSortingStrategy

////////// DndContext:
//
// Оборачивает все остальные компоненты и обрабатывает события перетаскивания (drag and drop).
//
// onDragEnd: вызывается, когда пользователь завершает перетаскивание. handleDragEnd — функция, которая определяет, что происходит, когда элемент перемещается.
//
// collisionDetection: определяет метод обнаружения коллизий. closestCenter — это метод, который обнаруживает коллизии по центру ближайшего элемента.
//
////////// SortableContext:
//
// Создает контекст сортировки для элементов, которые можно перетаскивать.
//
// items: массив элементов, которые можно перетаскивать.
//
// strategy: определяет стратегию сортировки. verticalListSortingStrategy — это стратегия, которая сортирует элементы вертикально.
//
///////// Container:
//
// Оборачивает сетку (Grid), предоставляя фиксированную ширину контейнера.
//
///////// Grid:
//
// Создает сетку для размещения компонентов.
//
// rowSpacing: определяет вертикальное расстояние между строками.
//
// columnSpacing: определяет горизонтальное расстояние между столбцами.
//
// sx: стиль элемента, здесь задается верхний отступ для сетки.
//
//////// items.map:
//
// Проходит через каждый элемент в массиве items.
//
// key: уникальный идентификатор элемента.
//
// Component: компонент, связанный с данным key.
//
//////// DraggableComponent:
//
// Компонент, который можно перетаскивать.
//
// key: уникальный идентификатор компонента.
//
// id: идентификатор компонента, используемый для управления перетаскиванием.
//
// component: компонент, который будет отображаться внутри DraggableComponent.
//
// Этот код создает сетку из перетаскиваемых компонентов, оборачивая их в контексты для обработки событий перетаскивания и сортировки.

// import Container from "@mui/material/Container"
// import Grid from "@mui/material/Grid2"
// import { CorrespondentAccount } from "./correspondentAccount/correspondentAccount"
// import { WorkingHoursBISS } from "./workingHoursBISS/WorkingHoursBISS"
// import { AccessToDatabase } from "./accessToDatabase/AccessToDatabase"
// import { StatusOfPayments } from "./statusOfPayments/StatusOfPayments"
// import { SMP } from "./smp/SMP"
// import { ErrorsOnLinesFP } from "./errorsOnLinesFP/ErrorsOnLinesFP"
// import { Vitriny } from "./vitriny/Vitriny"
//
// export const Monitoring = () => {
//   return (
//     <Container fixed>
//       <Grid container rowSpacing={0} columnSpacing={4} sx={{ p: "10px 0 0 0" }}>
//         <CorrespondentAccount />
//         <WorkingHoursBISS />
//         <AccessToDatabase />
//         <StatusOfPayments />
//         <SMP />
//         <ErrorsOnLinesFP />
//         <Vitriny />
//       </Grid>
//     </Container>
//   )
// }
