import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function App() {

  const [myCurrency, setMyCurrency] = React.useState('select an Option');
  const handleChange = (event) => {
    setMyCurrency(event.target.innerText);
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'green', border: 'none' }}>
          {myCurrency === 'select an Option' ? 'Currency' : `Currency (${myCurrency})`}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: 'green', border: 'none' }}>
          <Dropdown.Item eventKey='$ Dollar' onClick={handleChange}>$ Dollar</Dropdown.Item>
          <Dropdown.Item eventKey='£ Pound' onClick={handleChange}>£ Pound</Dropdown.Item>
          <Dropdown.Item eventKey='€ Euro' onClick={handleChange}>€ Euro</Dropdown.Item>
          <Dropdown.Item eventKey='₹ Rupee' onClick={handleChange}>₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
