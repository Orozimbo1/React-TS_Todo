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
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefa</p>
      )}
    </>
  )
}

export default TaskList