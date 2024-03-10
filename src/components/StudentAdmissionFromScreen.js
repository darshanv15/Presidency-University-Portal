import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
const StudentAdmissionFormScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [passOutYear, setPassOutYear] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      firstName == "" ||
      middleName == "" ||
      lastName == "" ||
      collegeName == "" ||
      passOutYear == ""
    ) {
      setError("Please select all the details");
    } else {
      const admissionDetails = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        collegeName: collegeName,
        passOutYear: passOutYear,
      };
      axios
        .post("http://localhost:3004/admission", admissionDetails)
        .then((response) => console.log("res", response.data))
        .catch((err) => console.log("error", err));
      setError("");
      setSuccess("Data saved Sucessfully..!!!");
    }
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setCollegeName("");
    setPassOutYear("");
  };

  return (
    <Container>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <h4>Fill the Following Details</h4>
          <Form onSubmit={submitHandler}>
            <Form.Group as={Row} controlId="firstName" className="my-3">
              <Form.Label column sm={4}>
                FirstName
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ borderColor: firstName ? "green" : "red" }}
                ></Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="middleName" className="my-3">
              <Form.Label column sm={4}>
                Middle Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="enter middle name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  style={{ borderColor: middleName ? "green" : "red" }}
                ></Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="lastName" className="my-3">
              <Form.Label column sm={4}>
                Last Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ borderColor: lastName ? "green" : "red" }}
                ></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="collegeName" className="my-3">
              <Form.Label column sm={4}>
                College Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="enter collegename"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  style={{ borderColor: collegeName ? "green" : "red" }}
                ></Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="date" className="my-3">
              <Form.Label column sm={4}>
                Year of Passing
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="date"
                  value={passOutYear}
                  onChange={(e) => setPassOutYear(e.target.value)}
                  style={{ borderColor: passOutYear ? "green" : "red" }}
                ></Form.Control>
              </Col>
            </Form.Group>
            <Button type="submit">Submit</Button>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            {success ? <Alert variant="success">{success}</Alert> : null}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default StudentAdmissionFormScreen;
