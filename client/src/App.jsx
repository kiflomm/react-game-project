import { useState } from 'react' 
import './App.css' 
import Header from './components/Header.jsx'
import AddPlayer from './components/AddPlayer.jsx'
import PlayersDetail from './components/PlayersDetail.jsx'
import RandomNumberGenerator from './components/RandomNumberGenerator'  
import MyComponent from './components/MyComponent.jsx'
function App() { 
  return (
    <>  
        {/* <Header /> */}
        <AddPlayer />
        {/* <RandomNumberGenerator players ={ ["kiflom","kapital","biniam"]} guesses = {[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]} />   */}
        {/* <MyComponent /> */}
    </>
  )
}

export default App 