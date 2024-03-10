import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import TableData from "./TableData";
import { useParams } from "react-router-dom";
import axios from "axios";
const ResultPage = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  const value = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3002/studentInfo")
      .then((response) => {
        response.data.map((item) => {
          if (item.registerId === value.id) {
            setStudentDetails(item);
          }
        });
      })
      .catch((error) => {});
  }, []);

  return (
    <Container>
      <Row className="my-3 justify-content-center">
        <Col md={6}>
          <h4>Presidency A+ University College, Bengaluru</h4>
          <h6 style={{ marginLeft: "3rem" }}>
            VII Semester, BCA Examination Result, Nov/Dec.2023
          </h6>
        </Col>
      </Row>

      <Row>
        <Col md={6} sm={12}>
          {studentDetails !== undefined && 
            <Form>
              <Form.Group controlId="studentName">
                <Form.Label>Student Name:</Form.Label>
                <Form.Label style={{ marginLeft: "5.4rem" }}>
                  {studentDetails.studentName}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="fatherName">
                <Form.Label>Father's/Mother's Name:</Form.Label>
                <Form.Label style={{ marginLeft: "1rem" }}>
                  {studentDetails.fatherName}
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="collegeName">
                <Form.Label>College Name:</Form.Label>
                <Form.Label style={{ marginLeft: "5.5rem" }}>
                  {studentDetails.collegeName}
                </Form.Label>
              </Form.Group>
            </Form>
          }
        </Col>

        <Col md={5} sm={12}>
          {studentDetails !== undefined && 
            <Form style={{ float: "right" }}>
              <Form.Group controlId="registerId">
                <Form.Label>Register No:</Form.Label>
                <Form.Label style={{ marginLeft: "0.5rem" }}>
                  {studentDetails.registerId}
                </Form.Label>
              </Form.Group>
            </Form>
          }
        </Col>
      </Row>
      <TableData studentId={studentDetails.registerId}/>
    </Container>
  );
};
export default ResultPage;
