import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import './styles/CountryDropdown.css';

function CountryDropdown({ countries }) {
	return (
		<DropdownButton title='Choose a country'>
			{countries.map(country => (
				<Dropdown.Item>
					<img className='flag-icon' src={country.flag} alt={country.country} />{' '}
					{country.country}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
}

export default CountryDropdown;
