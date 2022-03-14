import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../Styles/Cards.css'
const ResidentsInfo = ({Residentsurl}) => {
    const [residentinf, setResidentInf] = useState({});
    useEffect(()=>{
        axios.get(Residentsurl)
            .then(res=>{
                setResidentInf(res.data);
                console.log(res.data)
            });
    },[Residentsurl])
    return (
        <div className='Cards'>
            <img src={residentinf.image} alt="" />
            <ul>
                <li><b>{residentinf.name}</b></li>
                <li><b>Status: </b>{residentinf.status}</li>
                <li><b>Origin: </b>{residentinf.origin?.name}</li>
                <li><b>
                    Episodes in which he appears: 
                    </b>
                    {residentinf.episode?.length}
                </li>
            </ul>
            

        </div>
    );
};

export default ResidentsInfo;