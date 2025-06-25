import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

export default function PageWithParams() {

    let params = useParams();
    const [searchParams, setsearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        console.log(searchParams.get("s"))
    },[]) 

    function handleSearch() {
        setsearchParams({ s: searchValue })
    }

    return(<>
            <h1>Hola {params.param}</h1>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </>
    )
}