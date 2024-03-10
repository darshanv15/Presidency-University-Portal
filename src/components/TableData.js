import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ToWords } from "to-words";

const TableData = ({ studentId }) => {
  const [resultInfo, setResultInfo] = useState([]);
  //console.log(studentId)
  const towords = new ToWords();
useEffect(()=>{
  axios.get("http://localhost:3001/resultData").then((response) => {
    let temp = response.data.filter((data) => data.registerId === studentId);
    setResultInfo(temp);
})

},[resultInfo, studentId])

  const getTotalMarks = (value) => {
    let sum = 0;
    resultInfo.map((data) => {
      sum += parseInt(data[value]);
    });
    return sum;
  };

  const totalScore = () => {
    let count = 0;
    resultInfo.map((data) => {
      if (data.result === "PASS") {
        count++;
      }
    });
    if (count <= 3) {
      return "FAIL";
    } else {
      return "PASS";
    }
  };
  const semesterResult = () => {
    let sum = 0;
    let count = 0;
    resultInfo.map((data) => {
      sum += Number(data.obtained_marks);
      if (data.result === "PASS") {
        count++;
      }
    });
    let status;
    if (sum > 0 && count <= 3) {
      return "FAIL";
    } else {
      if (sum >= 255) {
        status = "DISTINCTION";
      } else if (sum <= 255 && sum >= 200) {
        status = "FIRST CLASS";
      } else if (sum <= 199 && sum >= 170) {
        status = "SECOND CLASS";
      }
    }
    return status;
  };
  const getPercentage = () => {
    let max = getTotalMarks("max");
    let obtained = getTotalMarks("obtained_marks");
    let percent = Math.ceil((obtained / max) * 100).toFixed(2);
    return percent;
  };

  const getTotalInWords = () => {
    let y = getTotalMarks("obtained_marks");
    let text = towords.convert(y);
    return text;
  };

  return (
    <Container>
      <Table className="my-3" bordered responsive striped>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>SI No</th>
            <th style={{ textAlign: "center" }} colSpan={2}>
              Subject
              <th style={{ textAlign: "center", padding: "0 3rem" }}>
                Subject_Code
              </th>
              <th style={{ textAlign: "center", padding: "0 3rem" }}>
                Subject
              </th>
            </th>
            <th style={{ textAlign: "center" }} colSpan={3}>
              Examination Marks Obtained
              <th style={{ textAlign: "center", padding: "0 3rem" }}>Max</th>
              <th style={{ textAlign: "center", padding: "0 4rem" }}>Min</th>
              <th style={{ textAlign: "center", padding: "0 2rem" }}>
                Obtained
              </th>
            </th>
            <th style={{ textAlign: "center" }}>Subject Result</th>
          </tr>
        </thead>
        <tbody>
          {resultInfo.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.code}</td>
              <td>{data.subject}</td>
              <td>{data.max}</td>
              <td>{data.min}</td>
              <td>{data.obtained_marks}</td>
              <td>{data.result}</td>
            </tr>
          ))}
          <tr>
            <th style={{ textAlign: "center" }} colSpan={3}>
              Grand Total
            </th>
            <th style={{ textAlign: "center" }}>{getTotalMarks("max")}</th>
            <th style={{ textAlign: "center" }}>{getTotalMarks("min")}</th>
            <th style={{ textAlign: "center" }}>
              {getTotalMarks("obtained_marks")}
            </th>
            <th style={{ textAlign: "center" }}>
              {totalScore("obtained_marks")}
            </th>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Total Marks Obtained [In Words]:</b>&nbsp;&nbsp;
        {getTotalInWords().toUpperCase()} ONLY
      </p>
      <p>
        <b>Result of Semester:</b>&nbsp;&nbsp;{semesterResult()}
      </p>
      <p>
        <b>Percentage: </b>&nbsp;&nbsp;{getPercentage()}%
      </p>
      <p>
        <b>Date:</b>&nbsp;&nbsp;05 Dec 2023
      </p>
    </Container>
  );
};
export default TableData;
