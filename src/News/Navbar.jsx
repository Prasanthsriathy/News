import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { useState } from 'react';
// import Img from '../Assets/Icon.jpg';


function NavScrollExample({setView}) {
const [val,setVal] = useState("")
console.log(val,"hhh")

const action2 =() =>{

}




  return (
    <div className='Container'>
    <Navbar bg="black" expand="lg">
      <Container fluid>
{/* 
       <Img src={Img}/> */}
        <Navbar.Brand href="#"> <b> Today News </b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',background:'#f5f5f5' }}
            navbarScroll
          >
            <Nav.Link href="">General</Nav.Link>
            <Nav.Link href="#action2">Business</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#action3" >
              Sports
            </Nav.Link>
            <Nav.Link href="#action4" >
            India
            </Nav.Link>
            {/* <Nav.Link href="#action5" disabled>
            Catagory
            </Nav.Link> */}

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e)=>setVal(e.target.value)}
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={()=>setView(val)}>Search</Button>
&nbsp;
            <Button variant="success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;