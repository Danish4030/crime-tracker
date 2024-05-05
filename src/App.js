import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import './App.css';

function CrimeTracker() {
  const [city, setCity] = useState('');
  const [crimeData, setCrimeData] = useState([]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    // Here you would make an API call to fetch crime data for the entered city
    // For the sake of this example, we'll use mock data
    const mockCrimeData = [
      { id: 1, city: 'Karachi', crimeRate: 'High', date: '2024-04-22' },
      { id: 2, city: 'Lahore', crimeRate: 'Medium', date: '2024-04-21' },
      { id: 3, city: 'Islamabad', crimeRate: 'Low', date: '2024-04-20' },
    ];

    const result = mockCrimeData.filter(crime => crime.city.toLowerCase() === city.toLowerCase());
    setCrimeData(result);
  };

  return (
    <Container className="crime-tracker">
      <h1 className="mt-4">Pakistan Crime Rate Tracker</h1>
      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Enter City Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>
      {crimeData.length > 0 && (
        <div className="mt-4">
          <h2>Crime Rate in {crimeData[0].city}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Crime Rate</th>
              </tr>
            </thead>
            <tbody>
              {crimeData.map(crime => (
                <tr key={crime.id}>
                  <td>{crime.date}</td>
                  <td>{crime.crimeRate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default CrimeTracker;
