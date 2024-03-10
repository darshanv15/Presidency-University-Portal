import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
const AdminScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setError("Please Enter All Fields");
    } else {
      axios.get("http://localhost:3003/adminLogin").then((response) => {
        response.data.map((data) => {
          if (data.adminId === email && data.password === password) {
            navigate("/admin/admissiondetails");
          } else {
            setError("Invalid Credentials");
          }
        });
      });
    }
    setEmail("");
    setPassword("");
  };
  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col md={6} sm={12}>
          <h4>Sign In</h4>

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email" className="my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: email ? '' : 'red' }}
              ></Form.Control>
             {email === '' && <Form.Text style={{ color: 'red' }}>Email address is required!</Form.Text>}
            </Form.Group>
            <Form.Group controlId="password" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: password ? '' : 'red' }}
              ></Form.Control>
              {password===''&&<Form.Text style={{color:"red"}}>Password is required</Form.Text>}
            </Form.Group>
            <Button type="submit">Submit</Button>
            {error ? <Alert variant="danger">{error}</Alert> : null}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminScreen;
