import React, { useState, useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(
    pos => {
      this.setState(preState => {
        return {
          ...preState,
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        };
      });
    },
    err => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
}

const useStyles = makeStyles(theme => ({
  leafletBox: {
    width: '100%',
    height: '100vh'
  }
}));

const MapContainer = () => {
  const clesses = useStyles();
  const [initPosition, setinitPosition] = useState({});

  return (
    <Map
      className={clesses.leafletBox}
      center={[22.779538, 120.35217]}
      zoom={12}
      maxZoom={40}
      duration={3}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ></TileLayer>
    </Map>
  );
};

export default MapContainer;
