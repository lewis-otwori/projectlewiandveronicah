import React, { useContext } from 'react'
import "../Styles/NavBarStyle.css"
import { ToggleContainer } from '../App'
function NavBar() {
    const { themeSwitch, setThemeSwitch } = useContext(ToggleContainer);
    return (
        <div>
            <nav style={themeSwitch ? { backgroundColor: "#fff" } : null}>
                <div className="Container">
                    <span id='LogName1'>Game</span><span id='LogName2'>Hub</span>
                </div>
                <div className='End'>
                    <div className='Toggle-Container' onClick={() => setThemeSwitch(!themeSwitch)}>
                        <div className={themeSwitch ? "Toggle-Switcher-Moved" : "Toggle-Switcher"}></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
