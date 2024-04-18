import React,{useState} from "react";
import './googlemap.css'
const GoogleMap = () => {
    // st stephen green

    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    const geo = navigator.geolocation;
    geo.watchPosition(userGPSCoords)
    function userGPSCoords(position){
        let userGPSLatitude = position.coords.latitude;
        let userGPSLongitude = position.coords.longitude;
        setLatitude(userGPSLatitude);
        setLongitude(userGPSLongitude);
    }
    const zoom = 16; // 15 is ideal


    return (
        <div className="googleMap">
            <iframe
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`}
                width="1280"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>
        </div>
    );
};


export default GoogleMap;