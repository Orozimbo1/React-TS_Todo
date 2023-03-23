import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

// CSS
import styles from './Taskform.module.css'

// Interface
import { ITask } from '../interface/Task'

type Props = {
  btnText: string,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Taskform = ({ btnText, taskList, setTaskList }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = { id, title, difficulty }

    setTaskList!([...taskList, newTask])

    setTitle('')
    setDifficulty(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input 
          type="text"
          name='title' 
          placeholder='Título da tarefa'
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input 
          type="number" 
          name='difficulty' 
          placeholder='Dificuldade da tarefa' 
          min={0} 
          max={5}
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default Taskform