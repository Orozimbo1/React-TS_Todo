import styles from './App.module.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <h2>Conteudo</h2>
      </main>
      <Footer />
    </div>
  )
}

export default App
