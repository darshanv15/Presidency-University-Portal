import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResultComponent = () => {
  const [registerId, setRegisterId] = useState("");
  console.log("register", registerId);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const submitt = (e, id) => {
    e.preventDefault();
    console.log("id", id);
    if (registerId == "") {
      setErrorMsg("Enter Register Id");
    } else {
      axios
        .get("http://localhost:3002/studentInfo")
        .then((response) => {
          console.log("response", response.data);
          response.data.map((data) => {
            if (data.registerId === id) {
              navigate(`/resultpage/${id}`);
            } else {
              setErrorMsg("Invalid RegisterId");
            }
          });
        })
        .catch((error) => {
          setErrorMsg("Server Error!!! Please Try After Some Time!!");
        });
    }
  };
  return (
    <Container>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <h3>Check your Results...</h3>
          <Form onSubmit={(e) => submitt(e, registerId)}>
            <Form.Group controlId="registerno" className="my-3">
              <Form.Label>Enter your Register No</Form.Label>
              <Form.Control
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value.toUpperCase())}
                type="text"
                placeholder="Enter Reg no"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
          {errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null}
        </Col>
      </Row>
    </Container>
  );
};
export default ResultComponent;
