import { useState } from 'react' 
import './App.css'  
import Header from './components/Header.jsx' 
import AddPlayer from './components/AddPlayer.jsx'
import PlayersDetail from './components/PlayersDetail.jsx'
import RandomNumberGenerator from './components/RandomNumberGenerator'  
import GameResult from './components/GameResult.jsx'

function App() { 
  const [shared,setShared] = useState({players:[],allGuesses:[]})
  const [RNGVisible,setRNGVisible] = useState(false)
  const [resultVisible,setResultVisible] = useState(false)
  const [sharedForResult,setSharedForResult] = useState([])
  const toggleRNG = () =>{
    setRNGVisible(!RNGVisible)
  }
  const toggleResult = () =>{
    setResultVisible (!resultVisible)
  }
  return (
    <>  
        <Header />
        <section className="section-two">
            <AddPlayer setShared={setShared}/>
            <PlayersDetail shared={shared} toggleRNG={toggleRNG}/>
        </section>  
        {RNGVisible && <RandomNumberGenerator shared={shared} setSharedForResult={setSharedForResult} toggleResult={toggleResult} />}   
        {resultVisible && <GameResult sharedForResult={sharedForResult}/>} 
    </>
  )
}

export default App 