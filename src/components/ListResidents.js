import React from 'react';
import ResidentsInfo from './ResidentsInfo';

const ListResidents = ({residents}) => {
    return (
        <>
            
            {
                residents?.map(residents =>(
                    <ResidentsInfo Residentsurl={residents} key={residents}/>
                ))}
        </>
    );
};

export default ListResidents;