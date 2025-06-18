import Logo from './navbar/Logo'
import SearchBar from './navbar/SearchBar'
import Login from './navbar/Login'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__section navbar__section--left">
                <Logo />
            </div>
            <div className="navbar__section navbar__section--center">
                <SearchBar />
            </div>
            <div className="navbar__section navbar__section--right">
                <Login />        
            </div>
        </nav>
    )
}