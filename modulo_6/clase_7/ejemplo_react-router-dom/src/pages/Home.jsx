import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>Welcome!</h1>
            <a href="/profile">Go to Profile (with anchors)</a><br />
            <NavLink to="profile">
                Go to Profile (with NavLink)
            </NavLink>
        </>
    )
}