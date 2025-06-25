//Paso 4. importar Routes, Route
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import NewUser from '../pages/NewUser'
import ExistingUser from '../pages/ExistingUser'
import PageWithParams from '../pages/PageWithParams'
import SubPage from '../pages/SubPage'
import ProtectedPage from '../pages/ProtectedPage'

// Paso 3. definir las rutas
export default function RoutesIndex() {

    const isNewUser = false
    const isAdmin = false

    return (
        <Routes>
            {/* <Route path="/direccion" element={<Pagina />} */}
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dynamic" element={isNewUser ? <NewUser /> : <ExistingUser />} />
            <Route path="/routeWithParams/:param" element={<PageWithParams />} />
            <Route path="/nivel1">
                <Route path="nivel2">
                    <Route path="nivel3" element={<SubPage />} />
                </Route>
            </Route>
            <Route element={isAdmin ? <Outlet /> : <Navigate to="/" />} >
                <Route path="/protected" element={<ProtectedPage />} />
            </Route>
        </Routes >
    )
}