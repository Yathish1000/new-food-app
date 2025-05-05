import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Auth } from './firebase';
// import { PersonData } from './recipes';




const Navbar1 = ({ persist, setpersist }) => {

  const navigate = useNavigate()


  const [emoji, setemoji] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true"
    setpersist(loggedIn)

  }, [])

  const Signout = () => {
    signOut(Auth)
    localStorage.removeItem("loggedIn")
    setpersist(false)
    navigate("/")

  }





  return (
    <div>
      <Navbar style={{ backgroundColor: 'white', width: "auto" }} expand="md">
        <Container fluid style={{ backgroundColor: 'white', fontWeight: 'bold', width: '100%', boxShadow: '2px 2px 2px grey ' }}>
          <Navbar.Brand href="#home"><img style={{ paddingLeft: '50px' }} width='150px' height='60px' src='https://as2.ftcdn.net/v2/jpg/02/76/34/55/1000_F_276345533_gQr0R2h68cDY1MRE1QyR7ydS2Xsiwx7T.jpg' /></Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            {
              persist ? <>
                <Nav className="me-auto" style={{ fontSize: '15px' }}>
                  <Nav.Link href="">Contact</Nav.Link>
                </Nav>
                <Form >
                  <Row>
                    <Col xs="auto">
                      <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                    </Col>
                  </Row>
                </Form>
                <Button onClick={Signout}>Signout</Button>
              </> : <>
                <>
                  <Nav className="me-auto" style={{ fontSize: '15px' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>

                  <div style={{ display: 'flex', gap: '20px', margin: "10px 0", marginLeft: '20px' }}>
                    <article>Dont have account ? click here...</article>
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle bsPrefix="custom-toggle" split variant="white" style={{ border: 'none', padding: '0', marginRight: '60px' }} > <span onMouseEnter={() => { setemoji(true) }} onMouseLeave={() => setemoji(false)}> {emoji ? <BsEmojiSmileFill size={22} /> : <BsEmojiSmile size={22} />}</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="/login">log-in</Dropdown.Item>
                        <Dropdown.Item href="/signin">sign-in</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </> </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Navbar1



