import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import AddGame from './components/AddGame';
import ShowMore from './components/ShowMore';
import EditGame from './components/EditGame';
import Contact from './components/Contact';
import Gamelist from './components/GameList';
import "./Index.css"
import Game from './images/Game.jpg'
import Letsplay from './images/Letsplay.jpg'
export const ToggleContainer = React.createContext()

function App() {

    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light")
    }
    const [themeSwitch, setThemeSwitch] = useState(false);
    const [search, setSearch] = useState("")
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(" http://localhost:3000/games")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    function handleSearch() {
        fetch(` http://localhost:3000/games?title_like=${search}`)
            .then(res => res.json())
            .then(data => setData(data));
    }


    function AddGames(image) {
        fetch("http://localhost:3000/games",
            {
                method: "POST", headers: { "accept": "application/json", "Content-type": 'application/json' },
                body: JSON.stringify(image)
            })
            .then(res => res.json())
            .then(res => console.log(res))
        setData(games => [...games, image])
    }


    return (
        <BrowserRouter>
            <ToggleContainer.Provider value={{ themeSwitch, setThemeSwitch }}>

                <div className={`App ${mode}`}>
                    <NavBar />
                    <div>
                        <input
                            className="srch"
                            type="text"
                            placeholder="Search title"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <button onClick={toggleMode} style={{ position: "absolute,", right: 0 }}>{mode === "light" ? "Darkmode" : "Lightmode"}</button>
                    <div className='PlayGames'>
                        <img src={themeSwitch ? Letsplay : Game} alt='' id={themeSwitch ? { Letsplay } : { Game }} />
                    </div>

                    <Routes>
                        <Route exact path='/' element={<Gamelist data={data} />}></Route>

                        <Route path='/:id' element={<ShowMore />}> </Route>
                        <Route path='/editgame/:id' element={<EditGame />}></Route>
                        <Route path='/contact us' element={<Contact />}></Route>
                    </Routes>
                    <AddGame AddGames={AddGames} />
                </div>

            </ToggleContainer.Provider>
        </BrowserRouter>
    )

}

export default App
