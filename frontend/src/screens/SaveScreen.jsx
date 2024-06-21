import { useState } from 'react';
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios'

const SaveScreen = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [kameezLength, setKameezLength] = useState('');
    const [chest, setChest] = useState('');
    const [waist, setWaist] = useState('');
    const [gheer, setGheer] = useState('');
    const [sleeves, setSleeves] = useState('');
    const [bottom, setBottom] = useState('');
    const [shalwarLength, setShalwarLength] = useState('');
    
    const submitHandler = async (e) => {
        e.preventDefault();

        const customerData = {
            name,
            phone,
            kameezLength,
            chest,
            waist,
            gheer,
            sleeves,
            bottom,
            shalwarLength,
          };
        
        try {
            const response = await axios.post('http://localhost:5000/api/customers', customerData)
            console.log('Data saved', response.data)
            window.location.reload();
        } catch (error) {
            console.log('Error saving data', error)
        }
    }

    return (
        <FormContainer>
            <h1>Save</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Name' value={name} 
                    onChange={(e) => setName(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='phone'>
                    <Form.Label>Phone No.</Form.Label>
                    <Form.Control type='text' placeholder='Enter Phone No.' value={phone} 
                    onChange={(e) => setPhone(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='kameezLength'>
                    <Form.Label>Kameez Length</Form.Label>
                    <Form.Control type='text' placeholder='Enter Kameez Length' value={kameezLength} 
                    onChange={(e) => setKameezLength(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='chest'>
                    <Form.Label>Chest</Form.Label>
                    <Form.Control type='text' placeholder='Enter Chest' value={chest} 
                    onChange={(e) => setChest(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='waist'>
                    <Form.Label>Waist</Form.Label>
                    <Form.Control type='text' placeholder='Enter Waist' value={waist} 
                    onChange={(e) => setWaist(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='gheer'>
                    <Form.Label>Gheer</Form.Label>
                    <Form.Control type='text' placeholder='Enter Gheer' value={gheer} 
                    onChange={(e) => setGheer(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='sleeves'>
                    <Form.Label>Sleeves</Form.Label>
                    <Form.Control type='text' placeholder='Enter Sleeves' value={sleeves} 
                    onChange={(e) => setSleeves(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='bottom'>
                    <Form.Label>Bottom</Form.Label>
                    <Form.Control type='text' placeholder='Enter Bottom' value={bottom} 
                    onChange={(e) => setBottom(e.target.value)} required></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='shalwarLength'>
                    <Form.Label>Shalwar Length</Form.Label>
                    <Form.Control type='text' placeholder='Enter Shalwar Length' value={shalwarLength} 
                    onChange={(e) => setShalwarLength(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Save
                </Button>
            </Form>
        </FormContainer>
    )
}

export default SaveScreen;