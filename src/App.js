import React, { useState, useEffect } from 'react';

import InfoCard from './components/InfoCard';
import CountryDropdown from './components/CountryDropdown';
import Map from './components/Map';
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/';

function App() {
	const [countries, setCountries] = useState([]);
	const [global, setGlobal] = useState({});
	const [selectedCountry, setSelectedCountry] = useState();

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
			<h2>COVID-19 Stats</h2>
			<div className='app-header'>
				<CountryDropdown countries={countries} />
			</div>

			<h2>Overview</h2>
			<div className='app-cards'>
				<InfoCard border={'primary'} cardTitle={'Cases'} cart />
				<InfoCard border={'success'} cardTitle={'Recovered'} />
				<InfoCard border={'danger'} cardTitle={'Deaths'} />
			</div>

			<h2>Map</h2>
			<div className='app-map'>
				<Map />
			</div>

			<h2>Graph</h2>
			<div className='app-graph'>
				<h3>-</h3>
			</div>
		</div>
	);
}

export default App;
