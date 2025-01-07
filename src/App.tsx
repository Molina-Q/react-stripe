import './App.scss'
import FeaturedCollection from './components/featured-collection/featured-collection'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MainSection from './components/main-section/main-section'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </div>
  )
}

export default App