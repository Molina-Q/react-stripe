import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home-page'
import './App.scss'
import NotFound from './components/not-found'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App