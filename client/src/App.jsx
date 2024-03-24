import { useState } from 'react' 
import './App.css'
import AddPlayer from './components/AddPlayer.jsx'
import Header from './components/Header.jsx'
import RandomNumberGenerator from './components/RandomNumberGenerator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Header />
        <AddPlayer />
        <RandomNumberGenerator />
    </>
  )
}

export default App
