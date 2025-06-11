import { useState } from 'react';
import SearchBar from './SearchBar'
import SongList from './SongList'
import './Container.css'

const songsConst = [
    { 
        id: 1,
        title: 'We will rock you',
        artist: 'queen',
        album: 'a night at the opera'
    },
    { 
        id: 2,
        title: 'Bohemian Rhapsody',
        artist: 'queen',
        album: 'a night at the opera'
    },
    { 
        id: 3,
        title: 'Stairway to heaven',
        artist: 'beatles',
        album: 'Abbey road'
    },
    { 
        id: 4,
        title: 'Yesterday',
        artist: 'beatles',
        album: 'Abbey road'
    },
    { 
        id: 5,
        title: 'Let it be',
        artist: 'beatles',
        album: 'Abbey road'
    },
    { 
        id: 6,
        title: 'Mr. Blue Sky',
        artist: 'Electric Light Orchestra',
        album: 'Abbey road'
    },
    { 
        id: 7,
        title: 'Inmigrant song',
        artist: 'Led Zeppelin',
        album: 'Abbey road'
    }
]

export default function Container ( ) {
    const [songs, setSongs] = useState(songsConst);

    function handleSearch(e) {
        const songTitle = e.target.value
        setSongs(songsConst.filter((song) => song.title.includes(songTitle) ))
    }
    

    return(
        <div className='container'>
            <SearchBar {...{handleSearch}} />
            <SongList {...{songs}} /> 
        </div>
    )
}