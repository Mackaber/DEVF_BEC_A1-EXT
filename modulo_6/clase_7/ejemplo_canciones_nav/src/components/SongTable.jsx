import { NavLink } from 'react-router-dom'

export default function SongTable({ songs }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Album</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(({id, name, album, duration}) => 
                    <tr key={id} >
                        <td>{name}</td>
                        <td><NavLink to={`/album/${id}`} >{album}</NavLink></td>
                        <td>{duration}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}