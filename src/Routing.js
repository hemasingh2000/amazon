import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Route,Routes } from 'react-router-dom';
import Home from './Home'
import Electronic from './Electronics';
import Jwellery from './Jwellery';


import Men from './Men';
import Women from './Women';


export default function Routing(){
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobile">Mobile</Nav.Link>
            <Nav.Link href="/laptop">Laptop</Nav.Link>
            <Nav.Link href="/electronics">electronic</Nav.Link>
            <Nav.Link href="/jewelery">Jwellery</Nav.Link>
            <Nav.Link href="/mensclothing">Men clothes</Nav.Link>
            <Nav.Link href="/womensclothing">Women clothes</Nav.Link>


            <Nav.Link> <button>login</button></Nav.Link>
            <Nav.Link> <button>Registration</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Routes>
  
  <Route path='/' Component={Home}></Route>
  <Route path='/electronics' Component={Electronic}></Route>
  <Route path='/jewelery' Component={Jwellery}></Route>
  <Route path='/mensclothing' Component={Men}></Route>
  <Route path='/womensclothing' Component={Women}></Route>
  
  
 

</Routes>
    </>
   
    );
    }
