import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

import InfoCard from './components/InfoCard';
import CountryDropdown from './components/CountryDropdown';
import Map from './components/Map';

function App() {
	return (
		<div className='app-container'>
			<div className='app-header'>
				<h2 id='header-id'>COVID-19 Stats</h2>
				<CountryDropdown />
			</div>

			<div className='app-cards'>
				<InfoCard />
				<InfoCard />
				<InfoCard />
			</div>

			<div className='app-map'>
				<Map />
			</div>
		</div>
	);
}

export default App;
