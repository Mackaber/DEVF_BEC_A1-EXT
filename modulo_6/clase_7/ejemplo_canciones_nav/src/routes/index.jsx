import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Album from '../pages/Album'

export default function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/album/:id" element={<Album />} />
        </Routes>
    )
}