
import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Auth } from '../components/firebase';
import { DataBase } from '../components/firebase'
import { set, get, ref } from 'firebase/database'

const Signin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');
  const [signupUser, setSignupUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleClose = () => {
    setShow(false);
    navigate('/');
  };

  const handleSignupChange = (e) => {
    setSignupUser({ ...signupUser, [e.target.name]: e.target.value, })
  }


  // console.log(signupUser);

  const { name, email, password, confirmpassword } = signupUser;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmpassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const UserSiningUp = await createUserWithEmailAndPassword(Auth, email, password);
      console.log(UserSiningUp);

      const user = UserSiningUp.user

      const Id = UserSiningUp.user.uid

      await updateProfile(user, { displayName: name })

      await set(ref(DataBase, `Data/users/${Id}`), {
        name:name,
        email:email,
        id:Id

      })

      navigate('/login')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ marginTop: '100px', width: '30%', backgroundColor: 'lightblue', padding: '20px' }}>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={handleSignupChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleSignupChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={handleSignupChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" name="confirmpassword" value={confirmpassword} onChange={handleSignupChange} required />
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit"  >Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>

    </div >
  );
};

export default Signin;
