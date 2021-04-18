import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.745,
    lng: 90.523
};
const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCO8Z2Rw7nJMdorG45FKHEz_rbbd4K_X1g"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript >
    )
}

export default Map
