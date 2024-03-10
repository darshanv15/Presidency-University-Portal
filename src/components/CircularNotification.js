import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CircularNotification = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };
  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpand3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleExpand4 = () => {
    setExpanded4(!expanded4);
  };
  const toggleExpand5 = () => {
    setExpanded5(!expanded5);
  };
  return (
    <Container>
      <marquee className="my-3">
        <h5>
          University Admission for Academic 2023-2024 is Open - Click here to
          Register!!! &nbsp; <Link to="/admissionform">Click here..</Link>
          &nbsp;Best of Luck!!!
        </h5>
      </marquee>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/img2.jpg" />
          <Card.Body>
            <Card.Title>Examination Notification</Card.Title>
            <Card.Text>
              <div>
                <p>
                  1) Payment of 2nd and 4th Sem Examination Fees will be
                  extended till <b>22.12.2023..</b>&nbsp;
                  <span
                    onClick={toggleExpand}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) Last Date to Pay 2nd and 4th Sem Examination Fees
                      without Fine is <b>22.12.2023</b>
                      <br />
                      2) Last Date to Pay 2nd and 4th Sem Examination Fees with
                      Fine of <b>200</b> is <b>23.12.2023</b>
                      <br />
                      3) Last Date to Pay 2nd and 4th Sem Examination Fees with
                      Fine of <b>500</b> is <b>24.12.2023</b>
                      <br />
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p>
                  2) Postponement of 2nd and 4th Sem Examination which was
                  scheluded to be held on <b>29.12.2023..</b>&nbsp;
                  <span
                    onClick={toggleExpand1}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded1 && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) 2nd Semester Examination timings will be from 10AM to
                      1PM on <b>29.12.2023</b>
                      <br />
                      2) 4th Semester Examination timings will be from 2PM to
                      5PM on <b>29.12.2023</b>
                      <br />
                    </p>
                  </div>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/img4.jpg" height="150px" />
          <Card.Body>
            <Card.Title>Sports Notification</Card.Title>
            <Card.Text>
              <div>
                <p>
                  1) Presidency University Hockey men's Championship is held on{" "}
                  <b>29.01.2024 and 30.01.2024...</b>&nbsp;
                  <span
                    onClick={toggleExpand2}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded2 && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) 1st,3rd,5th Semester Presidency University Hockey Men's
                      Championship is held on <b>29.01.2024</b>
                      <br />
                      2) 2nd,4th,6th Semester Presidency University Hockey Men's
                      Championship is held on <b>30.01.2024</b>
                      <br />
                    </p>
                  </div>
                )}
              </div>
              <div>
                <p>
                  2) Presidency University Kabbadi men's Trophy is held on{" "}
                  <b>01.02.2024 and 02.02.2024...</b>&nbsp;
                  <span
                    onClick={toggleExpand3}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded3 && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) 1st,3rd,5th Semester Presidency University Kabbadi
                      men's Trophy is held on <b>01.02.2024</b>
                      <br />
                      2) 2nd,4th,6th Semester Presidency University Kabbadi
                      men's Trophy is held on <b>02.02.2024</b>
                      <br />
                    </p>
                  </div>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/img1.jpg" height="150px" />
          <Card.Body>
            <Card.Title>General Notification</Card.Title>
            <Card.Text>
              <div>
                <p>
                  1) Presidency University results will be out on{" "}
                  <b>25.01.2024...</b>&nbsp;
                  <span
                    onClick={toggleExpand4}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded4 && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) Presidency University results will be out{" "}
                      <Link to="/results">Click here..</Link>
                      <br />
                    </p>
                  </div>
                )}
              </div>

              <div>
                <p>
                  2) University Admission for Academic 2023-2024 is Open Last
                  Date to Register is <b>01.02.2024...</b>&nbsp;
                  <span
                    onClick={toggleExpand5}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <b>Click here</b>
                  </span>
                </p>
                {expanded5 && (
                  <div
                    style={{
                      backgroundColor: "#e0e5ec",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#e0e5ec",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      1) University Admission for Academic 2023-2024 is Open{" "}
                      <Link to="/admissionform">Click here..</Link>
                      <br />
                    </p>
                  </div>
                )}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
    </Container>
  );
};
export default CircularNotification;