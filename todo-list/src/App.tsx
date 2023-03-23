import styles from './App.module.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Taskform from './components/Taskform'

function App() {

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform btnText='Criar tarefa' />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
