import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import './styles/CountryDropdown.css';

function CountryDropdown() {
	return (
		<DropdownButton classNane='dropdown' title='Choose a country'>
			<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
			<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
			<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
		</DropdownButton>
	);
}

export default CountryDropdown;
