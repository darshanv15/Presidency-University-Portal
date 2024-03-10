import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Departments = () => {
  return (
    <Container responsive striped>
      <Row>
        <Col md={6} sm={12} className="my-3">
          <img
            className="d-block w-100 abt-img1"
            src="images/dep3.jpg"
            alt="image1"
          />
        </Col>
        <Col md={6} sm={12} className="my-3">
          <h4>Civil Engineering</h4>
          <p className="abt-p my-3">
            Civil engineering is a professional engineering discipline that
            deals with the design, construction, and maintenance of the physical
            and naturally built environment, including public works such as
            roads, bridges, canals, dams, airports, sewage systems, pipelines,
            structural components of buildings, and railways.The term was first
            used in the 18th century to distinguish the newly recognized
            profession from military engineering, until then preeminent. From
            earliest times, however, engineers have engaged in peaceful
            activities, and many of the civil engineering works of ancient and
            medieval times—such as the Roman public baths, roads, bridges, and
            aqueducts; the Flemish canals; the Dutch sea defenses.
          </p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6} sm={12}>
          <h4>Computer Science and Engineering</h4>
          <p className="abt-p my-3">
            Computer engineering is defined as the discipline that embodies the
            science and technology of design, construction, implementation, and
            maintenance of software and hardware components of modern computing
            systems and computer-controlled equipment. Computer engineering has
            traditionally been viewed as a combination of both computer science
            (CS) and electrical engineering (EE). It has evolved over the past
            three decades as a separate, although intimately related,
            discipline. Computer engineering is solidly grounded in the theories
            and principles of computing, mathematics, science, and engineering
            and it applies these theories and principles to solve technical
            problems through the design of computing hardware, software,
            networks, and processes.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <img
            src="images/dep2.jpg"
            alt="img2"
            className="d-block w-100 abt-img2"
          />
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6} sm={12}>
          <img
            src="images/dep1.jpeg"
            alt="img3"
            className="d-block w-100 abt-img3 "
          />
        </Col>
        <Col md={6} sm={12}>
          <h4>Mechanical Engineering</h4>
          <p className="abt-p my-3">
            Mechanical engineers play key roles in a wide range of industries
            including automotive, aerospace, biotechnology, computers,
            electronics, microelectromechanical systems, energy conversion,
            robotics and automation, and manufacturing. The American Society of
            Mechanical Engineers (ASME) currently lists 36 technical divisions,
            from advanced energy systems and aerospace engineering to
            solid-waste engineering and textile engineering. The breadth of the
            mechanical engineering discipline allows students a variety of
            career options beyond the industries listed above. Regardless of the
            particular path they envision for themselves, a mechanical
            engineering education empowers students with creative thinking
            skills to design an exciting product or system; analytical tools to
            achieve their design goals.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Departments;
