import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const AdminExamDetails = () => {
  const [studentExamDetails, setStudentExamDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/examRegisterDetails")
      .then((res) => {
        setStudentExamDetails(res.data);
      })
      .catch((err) => console.log("errror", err));
  }, []);
  return (
    <Container style={{ textAlign: "center" }}>
      <h4>Student Examination Details for Academics Year 2023-24.</h4>
      <Table className="my-3" bordered hover responsive striped>
        <thead>
          <tr>
            <th>SI No</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Register_No</th>
            <th>Course_Name</th>
            <th>Course_Year</th>
            <th>Course_Sem</th>
          </tr>
        </thead>
        <tbody>
          {studentExamDetails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.registerNo}</td>
              <td>{data.course}</td>
              <td>{data.year}</td>
              <td>{data.semester}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default AdminExamDetails;
