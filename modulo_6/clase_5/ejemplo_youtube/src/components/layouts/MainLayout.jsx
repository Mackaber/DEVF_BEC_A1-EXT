import NavBar from './main/NavBar'
import Aside from './main/Aside'

export default function MainLayout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBar />
            <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
                <Aside />
                <div style={{ flex: 1, minWidth: 0 }}>
                    {children}
                </div>
            </div>
        </div>
    )
}