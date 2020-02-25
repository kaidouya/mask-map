import React, { useState, useEffect, useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import dataContext from './Store/dataContext';
import MarkerBox from './MarkerBox';
import './mapContainer.css';

function getCurrentPosition(setState) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      setState((presState) => {
        return (
          [pos.coords.latitude, pos.coords.longitude]
        );
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

const markerObjSetting = {
  chunkedLoading: true,
  removeOutsideVisibleBounds: true,
  iconCreateFunction: function (cluster) {
    const count = cluster.getChildCount()
    let clusterSize = {
      name: "small",
      size: 30
    }
    if (count > 10) {
      clusterSize.name = "medium"
      clusterSize.size = 60
    }
    if (count > 50) {
      clusterSize.name = "large"
      clusterSize.size = 90
    }
    return new L.DivIcon({
      html: count,
      className: `marker-custom marker-custom-${clusterSize.name}`,
      iconSize: null
    })
  }
}

const MapContainer = () => {
  const clesses = useStyles();
  const [initPosition, setinitPosition] = useState([0, 0]);
  const data = useContext(dataContext);

  const markerClusterGroup = useMemo(() => {
    return <MarkerBox setting={markerObjSetting}>
      {data.map(({ geometry, properties }) => {
        return <Marker position={[geometry.coordinates[1], geometry.coordinates[0]]} key={properties.id}>
          {/* <MaskPopup {...properties} /> */}
        </Marker>
      })}
    </MarkerBox>
  }, [data])


  useEffect(() => {
    getCurrentPosition(setinitPosition);
  }, []);

  return (
    <Map
      className={clesses.leafletBox}
      center={initPosition}
      zoom={12}
      maxZoom={40}
      duration={3}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ></TileLayer>
      {markerClusterGroup}
    </Map>
  );
};

export default MapContainer;
