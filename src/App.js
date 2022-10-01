import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen bg-[#2a162280]'>
        <Navbar />
        <main className=' mx-auto px-6 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
