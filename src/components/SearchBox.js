import React, {useState} from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {
    const [TypeId, setTypeId] = useState("");

    const searchType = () =>{
        //Se hace peticion con la entrada de input
        axios.get(`https://rickandmortyapi.com/api/location/${TypeId}`)
        .then((res) =>{
            setLocation(res.data);
        });
    }
    return (
        <>
            <input 
                type="text" 
                onChange={e=>setTypeId(e.target.value)} 
                value={TypeId}
            />
            <button onClick={searchType}>Search</button>
        </>
    );
};

export default SearchBox;