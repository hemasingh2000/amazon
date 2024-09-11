import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Route,Routes,Link } from 'react-router-dom';
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
         
        
            <Link to="/">Home</Link>
            <Link to="/mobile">Mobile</Link>
            <Link to="/laptop">Laptop</Link>
            <Link to="/electronics">electronic</Link>
            <Link to="/jewelery">Jwellery</Link>
            <Link to="/mensclothing">Men clothes</Link>
            <Link to="/womensclothing">Women clothes</Link>


            <Link> <button>login</button></Link>
            <Link> <button>Registration</button></Link>
          
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
