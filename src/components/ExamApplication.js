import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";
const ExamApplication = () => {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (
      firstName == "" ||
      lastName == "" ||
      registerNo == "" ||
      course == "" ||
      year == "" ||
      semester == ""
    ) {
      setError("Please fill all the details");
      console.log(setError);
    } else {
      const examDetails = {
        firstName: firstName,
        lastName: lastName,
        registerNo: registerNo,
        course: course,
        year: year,
        semester: semester,
      };
      axios
        .post("http://localhost:3005/examRegisterDetails", examDetails)
        .then((response) => console.log("res", response.data))
        .catch((err) => console.log("error", err));
      setSuccess("Data saved Sucessfully..!!!");
    }
  };
  return (
    <Container>
      <h4 className="my-3">Exam Application</h4>
      <Form
        className="my-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter First Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Last Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Register No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Register No"
              aria-describedby="inputGroupPrepend"
              required
              value={registerNo}
              onChange={(e) => setRegisterNo(e.target.value.toUpperCase())}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Register No.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Label>Course</Form.Label>
            <br />
            {/* <Form.Control type="text" placeholder="City" required /> */}

            <Form.Control 
              as="select"
              style={{ height: "39px" }}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option>Select your Course</option>
              <option value="Civil Engg">Civil Engg</option>
              <option value="Computer and Science Engg">Computer and Science Engg</option>
              <option value="Mechanical Engg">Mechanical Engg</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Year</Form.Label>
            <Form.Control
              as="select"
              style={{ height: "39px" }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option>Select your Year</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              as="select"
              style={{ height: "39px" }}
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option>Select your Semester</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
              <option value="Fifth">Fifth</option>
              <option value="Sixth">Sixth</option>
              <option value="Seventh">Seventh</option>
              <option value="Eighth">Eighth</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        {error ? <Alert variant="danger">{error}</Alert> : null}
        {success ? <Alert variant="success">{success}</Alert> : null}
      </Form>
    </Container>
  );
};
export default ExamApplication;
