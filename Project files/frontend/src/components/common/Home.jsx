import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import p3 from '../../images/p3.webp'

const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>MediCareBook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav>
              <Link to={'/'}>Home</Link>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='home-container'>
        <div className="left-side">
          <img alt="" src={p3} />
        </div>
        <div className="right-side">
          <p>
            <span className='f-letter'>Effortlessly schedule your doctor</span><br />
            <span className='s-letter'>appointments with just a few clicks,</span> <br />
            <span className='t-letter'>putting your health in your hands.</span><br />
            <Button color='info' className='mt-3 register'><Link to={'/Login'}>Book your Doctor</Link></Button>
          </p>
        </div>
      </div>


      <Container>
        <h1 className='text-center mb-4'>About Us</h1>
        <div className="right-side">
          <p>
            Booking a doctor appointment has never been easier. With our convenient online platform, you can quickly and effortlessly schedule your appointments from the comfort of your own home. No more waiting on hold or playing phone tag with busy receptionists.

            Our user-friendly interface allows you to browse through a wide range of doctors and healthcare providers, making it simple to find the perfect match for your needs. Whether you require a routine check-up, specialist consultation, or urgent care, we have a diverse network of medical professionals ready to serve you.

            Gone are the days of flipping through phone directories or relying on word-of-mouth recommendations. Our comprehensive database provides detailed profiles of each doctor, including their specialties, qualifications, and availability. You can read reviews from other patients to gain insights into their experiences and make an informed decision.

            Once you've found the ideal doctor, booking an appointment is just a few clicks away. Select a convenient date and time slot, and our system will handle the rest. You'll receive instant confirmation, along with reminders leading up to your appointment, ensuring you never miss a crucial healthcare visit.

            Take control of your health and experience the convenience of online doctor appointment booking. Say goodbye to long waits and hello to seamless scheduling. Join our platform today and prioritize your well-being with ease and efficiency. <br /> <br />

            With our advanced booking system, you can say goodbye to the hassle of traditional appointment booking. Our platform offers real-time availability, allowing you to choose from a range of open slots that fit your schedule. Whether you prefer early morning, evening, or weekend appointments, we have options to accommodate your needs.

            We understand that emergencies can arise unexpectedly. That's why we offer same-day and next-day appointment options for urgent cases. No more waiting weeks for an available slot. We prioritize your health and ensure prompt access to medical care when you need it most.

            Our platform also provides convenient features such as online payment options and the ability to securely store your medical history and insurance information. This streamlines the check-in process, saving you valuable time during your visit.<br /> <br />

            In addition, our dedicated support team is available to assist you every step of the way. If you have any questions or need assistance with booking, our friendly representatives are just a call or message away. We strive to provide exceptional customer service and ensure a seamless experience for our users.

            Experience the convenience and efficiency of our doctor appointment booking platform. Take charge of your health and prioritize your well-being with ease. Join our growing community of satisfied users and discover the future of healthcare scheduling.
          </p>
        </div>
      </Container>



    </>
  )
}

export default Home
