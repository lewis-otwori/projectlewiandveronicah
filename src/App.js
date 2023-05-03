import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import Gamelist from './components/GameList';
import "./Index.css"
import Game from './images/Game.jpg'
import Letsplay from './images/Letsplay.jpg'
import AddGame from './components/AddGame';
export const ToggleContainer = React.createContext()

function App() {

    const [mode, setMode]=useState('light')

    const toggleMode = ()=> {
        setMode (mode === "light"  ? "dark" : "light")
    }
    const [themeSwitch, setThemeSwitch] = useState(false);

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(" http://localhost:3000/games")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <ToggleContainer.Provider value={{ themeSwitch, setThemeSwitch }}>

            <div className={`App ${mode}`}>
                <NavBar />
                <SearchBar/>
                <button onClick={toggleMode} style={{position: "absolute,", right: 0}}>{mode === "light" ? "Darkmode" : "Lightmode"}</button>
                
                <div className='PlayGames'>
                    <img src={themeSwitch ? Letsplay : Game} alt='' id={themeSwitch ? { Letsplay } : { Game }} />
                </div>
                <Gamelist data={data} />
                <AddGame/>
                <Main /></div>
        </ToggleContainer.Provider>
    )

}

export default App
