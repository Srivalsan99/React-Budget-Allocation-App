import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Currency from './Currency';
import Budget from './Budget_setting';
import Allocation from './allocation';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
    { id: 4, name: 'Alice', age: 35 },
  ];

root.render(<div>
    <br/>
    <h1>Company's Budget Allocation</h1>
    <br/>
    <Budget/>
    <br/>
    <h1>Allocation</h1>
    <Allocation/>
    <ul id="item">
        
    </ul>


</div>);