import LeftSideBar from "./LeftSideBar";

export default function NavBar({ children }) {
    return (
        <div className="navbar-layout">
            <LeftSideBar />
            <div className="navbar-content">
                {children}
            </div>
            <div className="navbar-right"></div>
        </div>
    )
}