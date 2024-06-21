import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Customer Data</h1>
          <div className='d-flex'>
            <Button variant='primary' href='/save' className='me-3'>
              Save new customer
            </Button>
            <Button variant='secondary' href='/measurements'>
              Measurements
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;