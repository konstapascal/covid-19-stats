import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import './styles/Map.css';

function Map() {
	return (
		<LeafletMap className='map' center={[25, -20]} zoom={3}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
		</LeafletMap>
	);
}

export default Map;
