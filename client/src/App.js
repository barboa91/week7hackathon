import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
