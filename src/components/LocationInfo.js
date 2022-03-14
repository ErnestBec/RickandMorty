import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <>
            <h3>{location.name}</h3>
            <ul>
                <li><b>Type:</b>{location.type}</li>
                <li><b>Dimension:</b>{location.dimension}</li>
                <li><b>Residents:</b>{location.residents?.length}</li>
            </ul>
        </>
    );
};

export default LocationInfo;