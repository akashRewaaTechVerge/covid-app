import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

 
function Maps({ lat, lng, google }) {
    return (
        <Map google={google} center={
            { lat:'23.023557963079195', lng:'72.57152164215671' }
        } zoom={15}   >
            <Marker position={{ lat:'23.023557963079195', lng:'72.57152164215671' }} />
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAb-fX2IV_idE2Iwba-2aktnyjO3I3CImo",
})(Maps)