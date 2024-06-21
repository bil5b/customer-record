import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Button } from 'react-bootstrap';

const CustomerScreen = () => {
    const [customers, setCustomers] = useState([]);
    
    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/customers/all');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers: ', error);
        }
    }

    useEffect(() => {
        fetchCustomers();
    }, [])
    
    const deleteCustomer = async (id) => {
      if (window.confirm('Are you sure you want to delete this customer?')) {
        try {
          await axios.delete(`http://localhost:5000/api/customers/${id}`); 
          window.location.reload();
        } catch (error) {
            console.error('Error deleting customer', error);                
        }
      }
      
    }
    
    

    return (
        <Container>
          <h1>All Customers</h1>
          {customers.length > 0 ? (
            <Table striped bordered hover className='mt-3'>
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
                    <td>
                      <Button variant="danger" onClick={() => deleteCustomer(customer._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No customers found</p>
          )}
        </Container>
      );
    
}

export default CustomerScreen;