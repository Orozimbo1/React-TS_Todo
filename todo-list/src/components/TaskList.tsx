// CSS
import styles from './TaskList.module.css'

// Interface
import { ITask } from '../interface/Task'

type Props = {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            {task.title}
          </div>
        ))
      ) : (
        <p>Não tem tarefa</p>
      )}
    </>
  )
}

export default TaskList