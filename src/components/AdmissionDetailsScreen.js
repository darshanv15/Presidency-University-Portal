import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import AdminExamDetails from "./AdminExamDetails";
const AdmissionDetailsScreen = () => {
  const [studentAdmissionDetails, setStudentAdmissionDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/admission")
      .then((res) => {
        setStudentAdmissionDetails(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const deleteHandler = (tableId) => {
    axios
      .delete(`http://localhost:3004/admission/${tableId}`, tableId)
      .then((response) => {
        console.log(response);
        axios.get("http://localhost:3004/admission").then((res) => {
          setStudentAdmissionDetails(res.data);
        });
      });
  };

  return (
    <Container className="my-3" style={{ textAlign: "center" }}>
      <h4>Student Admission Details for Academics Year 2023-24.</h4>
      <Table className="my-3" bordered hover responsive striped>
        <thead>
          <tr>
            <th>SI No</th>
            <th>First_Name</th>
            <th>Middle_Name</th>
            <th>Last_Name</th>
            <th>College_Name</th>
            <th>Passed_Out_Year</th>
          </tr>
        </thead>
        <tbody>
          {studentAdmissionDetails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.middleName}</td>
              <td>{data.lastName}</td>
              <td>{data.collegeName}</td>
              <td>{data.passOutYear}</td>
              <td onClick={() => deleteHandler(index + 1)}>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br/>
      <br/>
      <AdminExamDetails/>
    </Container>
  );
};
export default AdmissionDetailsScreen;
