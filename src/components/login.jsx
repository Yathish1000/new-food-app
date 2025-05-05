import React, { useState } from 'react'
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../components/firebase';
import { DataBase } from '../components/firebase'
import { get, ref } from 'firebase/database'


const Login = ({persist,setpersist}) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(true);
  const [error, seterror] = useState('')

  const [loginuser, setloginuser] = useState({
    email: '',
    password: ''
  })


  const handleClose = () => {
    setShow(false);
    navigate("/")
  }
 

  const handle_login_user = (x) => {
    setloginuser({ ...loginuser, [x.target.name]: x.target.value })
  }

  const { email, password } = loginuser

  const handle_submit = async (e) => {
    e.preventDefault()
    seterror('')

    try {
      const UserLoggedIn = await signInWithEmailAndPassword(Auth, email, password)

      const UID = UserLoggedIn.user.uid
      console.log(UID)

      const UserData = await get(ref(DataBase,`Data/users/${UID}`))
      console.log(UserData);
      

      if (UserData.exists()){ 
        navigate("/recipes",{state:{personData:UserData.val()}})
        setpersist(true)
        localStorage.setItem("loggedIn","true")
      }else{
        alert('no data')
      }

    }
    catch (err) {
      seterror(err.message)

    }
  }



  return (
    <div style={{ marginTop: '100px', width: '30%', backgroundColor: 'lightblue' }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login-page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handle_submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' placeholder="enter mail here to login" onChange={handle_login_user} required autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" name='password' placeholder="password" onChange={handle_login_user} required autoFocus />
            </Form.Group>

            <Button variant="secondary" style={{ marginRight: '15rem' }} onClick={handleClose}>Close </Button>
            <Button variant="primary" type='submit'>submit</Button>
          </Form>
        </Modal.Body>
      </Modal>


    </div>
  )
}

export default Login
