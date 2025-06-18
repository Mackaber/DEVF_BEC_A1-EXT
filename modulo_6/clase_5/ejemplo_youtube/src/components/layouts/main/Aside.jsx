import Sections from './Aside/Sections'
import You from './Aside/You'
import Suscriptions from './Aside/Suscriptions'
import './Aside.css'

export default function Aside() {
    return (
        <aside className="drawer-aside">
            <div className="drawer-content">
                <Sections />
                <You />
                <Suscriptions />
            </div>
        </aside>
    )
}