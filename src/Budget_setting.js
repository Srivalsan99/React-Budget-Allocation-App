import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { alignPropType } from 'react-bootstrap/esm/types';

export default function Budget_setting() {
  const [myNumber, setMyNumber] = React.useState('');
  const handleChange = (event) => {
    setMyNumber(event.target.value);
  };
  const [myCurrency, setMyCurrency] = React.useState({ id: '', value: 'select an Option' });
  const handleChange1 = (event) => {
    const currencyObj = JSON.parse(event.target.getAttribute('data-value'));
    setMyCurrency(currencyObj);
  };
  return (
    <Navbar style={{backgroundColor:'grey', padding: '1rem 1rem' }} className='justify-content-between'>
      <form class="form-inline">
        <label>Budget:     {myCurrency.id}  
          <input type="number" placeholder="number" aria-label="number" max="20000"/>
        </label>
      </form>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'green', border: 'none' }}>
          {myCurrency.value === 'select an Option' ? 'Currency' : `Currency (${myCurrency.value})`}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: 'green', border: 'none' }}>
          <Dropdown.Item data-value='{"id":"$","value":"$ Dollar"}' onClick={handleChange1}>$ Dollar</Dropdown.Item>
          <Dropdown.Item data-value='{"id":"£","value":"£ Pound"}' onClick={handleChange1}>£ Pound</Dropdown.Item>
          <Dropdown.Item data-value='{"id":"€","value":"€ Euro"}' onClick={handleChange1}>€ Euro</Dropdown.Item>
          <Dropdown.Item data-value='{"id":"₹","value":"₹ Rupee"}' onClick={handleChange1}>₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}
