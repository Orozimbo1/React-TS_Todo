import { useState } from 'react'

// CSS
import styles from './App.module.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Taskform from './components/Taskform'
import Modal from './components/Modal'

// Interface
import { ITask } from './interface/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')

    if(display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {

    const updatedTask: ITask = { id, title, difficulty }

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal 
        children={
          <Taskform 
            btnText='Editar tarefa' 
            taskList={taskList} 
            task={taskToUpdate} 
            handleUpdate={updateTask}
          />
        } 
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform 
            btnText='Criar tarefa' 
            taskList={taskList} 
            setTaskList={setTaskList}  
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask} 
            handleEdit={editTask} 
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
