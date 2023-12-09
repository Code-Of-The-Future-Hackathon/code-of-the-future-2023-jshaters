import React, { useEffect } from 'react';
import { MapContainer, Popup, Marker, TileLayer, useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { usePage } from '@inertiajs/react';
interface SetViewOnClickProps {
    coords: LatLngTuple;
}



const GreenSpacesMap: React.FC = () => {
    const { props } = usePage();
    const addressPoints: any = props.greenSpaces; 
    console.log(typeof addressPoints);
    console.log(addressPoints);



    const customIcon = L.icon({
        iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });



    const coords: LatLngTuple = [42.7339, 25.4858];
    const fixedPoint: LatLngTuple = [27.648598, 41.2447142]



    return (
        <div style={{ height: "600px" }}>
       <MapContainer center={coords} zoom={7} style={{ height: "100vh", width: "100%" }}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        
    ></TileLayer>
    <Marker position={fixedPoint}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
{/* 
    {addressPoints.map((addressPoint: any, index: number) => {
    return addressPoint.geometry.map((geom: { lat: number, lon: number }, idx: number) => {
        const latlng: LatLngTuple = [geom.lat, geom.lon];
        
        return <Marker key={`${index}-${idx}`} position={latlng} icon={customIcon} />;
    });
})} */}
</MapContainer>
        </div>
    );
};

export default GreenSpacesMap;
