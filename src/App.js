import React, { useEffect, useState } from 'react';
import { Provider } from './Store/dataContext';

import { Marker, Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const sixSchoolApi =
  'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

const App = () => {
  const [storeList, setStoreList] = useState([]);

  const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    setStoreList(data.features);
  };

  // 取得診所資料 + 使用者的定位資料
  useEffect(() => {
    // fetchData(sixSchoolApi);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Map
        className='markercluster-map'
        center={[51.0, 19.0]}
        zoom={4}
        maxZoom={18}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]} />
          <Marker position={[52.2297, 21.0122]} />
          <Marker position={[51.5074, -0.0901]} />
        </MarkerClusterGroup>
      </Map>
    </div>
  );
};

export default App;
