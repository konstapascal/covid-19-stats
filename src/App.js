import React, { useState, useEffect } from 'react';

import InfoCard from './components/InfoCard';
import CountryDropdown from './components/CountryDropdown';
import Map from './components/Map';
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/';

function App() {
	const [countries, setCountries] = useState([]);
	const [global, setGlobal] = useState({});

	useEffect(() => {
		async function fetchCountriesData() {
			const res = await axios.get(url + 'countries');
			const data = res.data;

			const countries = data.map(country => {
				return {
					country: country.country,
					flag: country.countryInfo.flag,
					coordinates: {
						lat: country.countryInfo.lat,
						long: country.countryInfo.long,
					},
					iso: country.countryInfo.iso3,
					cases: country.cases,
					recovered: country.recovered,
					deaths: country.deaths,
					tests: country.tests,
					population: country.population,
				};
			});

			setCountries(countries);
		}

		async function fetchGlobalData() {
			const res = await axios.get(url + 'all');
			const data = res.data;

			setGlobal({
				population: data.population,
				cases: data.cases,
				recovered: data.recovered,
				tests: data.tests,
				deaths: data.deaths,
				affectedCountries: data.affectedCountries,
			});
		}

		fetchCountriesData();
		fetchGlobalData();
	}, []);

	return (
		<div className='app-container'>
			<div className='app-header'>
				<h2 id='header-id'>COVID-19 Stats</h2>
				<CountryDropdown countries={countries} />
			</div>

			<div className='app-cards'>
				<InfoCard border={'primary'} cardTitle={'Cases'} cart />
				<InfoCard border={'success'} cardTitle={'Recovered'} />
				<InfoCard border={'danger'} cardTitle={'Deaths'} />
			</div>

			<div className='app-map'>
				<Map />
			</div>
		</div>
	);
}

export default App;
