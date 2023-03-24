import { useState } from 'react'

// CSS
import styles from './App.module.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Taskform from './components/Taskform'

// Interface
import { ITask } from './interface/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
