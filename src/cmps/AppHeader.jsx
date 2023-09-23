import { NavLink } from 'react-router-dom'
const { useSelector } = 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function AppHeader() {

    return (
        <header className="app-header">
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <h1>MisterToy App</h1>
        </header>
    );
}