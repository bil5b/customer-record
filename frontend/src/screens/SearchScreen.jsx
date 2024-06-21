import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Table, Container, Alert } from 'react-bootstrap';

const SearchScreen = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null)
    const { query } = useParams();

    useEffect(() => {
        const fetchCustomers = async () => {
          try{
            const { data } = await axios.get(`http://localhost:5000/api/customers/search?query=${query}`);
            setCustomers(data);
            setError(null);
          } catch (error) {
            setCustomers([]);
            setError('No customer found');
            console.error('Error fetching customer(s): ', error);
          }
        }

        fetchCustomers();
    },[query])

    return (
        <Container>
          <h1>Search Results</h1>
          {error ? (
            <Alert variant="danger">{error}</Alert>
          ) : customers.length > 0 ? (
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Kameez Length</th>
                  <th>Chest</th>
                  <th>Waist</th>
                  <th>Gheer</th>
                  <th>Sleeves</th>
                  <th>Bottom</th>
                  <th>Shalwar Length</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.kameezLength}</td>
                    <td>{customer.chest}</td>
                    <td>{customer.waist}</td>
                    <td>{customer.gheer}</td>
                    <td>{customer.sleeves}</td>
                    <td>{customer.bottom}</td>
                    <td>{customer.shalwarLength}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Loading</p>
          )}
        </Container>
      );
}

export default SearchScreen;