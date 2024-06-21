import axios from 'axios';
import { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegSave, FaRegAddressBook } from 'react-icons/fa';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);  
    }  
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Customer Record</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/save'>
                <FaRegSave /> Save new
              </Nav.Link> 
              <Nav.Link href='/measurements'>
                <FaRegAddressBook /> Measurements
              </Nav.Link>
            </Nav>
            <Form inline onSubmit={searchHandler}>
              <FormControl
                type="text"
                placeholder="Search customers..."
                className="mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="outline-secondary" size="sm">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;