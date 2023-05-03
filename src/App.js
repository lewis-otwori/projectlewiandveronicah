import React, { useState, useEffect } from 'react'
import Main from './components/Main';
import NavBar from './components/NavBar'
import Gamelist from './components/GameList';
import "./Index.css"
import Game from './images/Game.jpg'
import Letsplay from './images/Letsplay.jpg'
export const ToggleContainer = React.createContext()

function App() {
    const [themeSwitch, setThemeSwitch] = useState(false);

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(" http://localhost:3000/games")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <ToggleContainer.Provider value={{ themeSwitch, setThemeSwitch }}>

            <div className='App'>
                <NavBar />
                <div className='PlayGames'>
                    <img src={themeSwitch ? Letsplay : Game} alt='' id={themeSwitch ? { Letsplay } : { Game }} />
                </div>
                <Gamelist data={data} />
                <Main /></div>
        </ToggleContainer.Provider>
    )

}

export default App
