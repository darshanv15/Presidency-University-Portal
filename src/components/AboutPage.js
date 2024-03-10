import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container responsive striped>
      <Row>
        <Col md={6} sm={12} className="my-3">
          <img
            className="d-block w-100 abt-img1"
            src="images/img1.jpg"
            alt="image1"
          />
        </Col>
        <Col md={6} sm={12} className="my-3">
          <h4>Vision</h4>
          <p className="abt-p my-3">
            Today 13 years down the lane we are proud to announce that
            Presidency College (Autonomous) is a renowned A+ School with its
            Management Courses flourishing with great results. Presidency have
            made the choice to strive for excellence in all that we inculcate in
            our students to make them understand and imbibe honesty and
            competence and a will to break out of monotony to be creative so
            that they understand the power of imagination. Close to four decades
            now the Institution under the hawk’s eye vision of its Chairman has
            been continuously working towards the growth approaching several
            branches and holding a proud position in the field of education.
          </p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6} sm={12}>
          <h4>Mission</h4>
          <p className="abt-p my-3">
            Presidency have made the choice to strive for excellence in all that
            we inculcate in our students to make them understand and imbibe
            honesty and competence and a will to break out of monotony to be
            creative so that they understand the power of imagination. Close to
            four decades now the Institution under the hawk’s eye vision of its
            Chairman has been continuously working towards the growth
            approaching several branches and holding a proud position in the
            field of education. Today 13 years down the lane we are proud to
            announce that Presidency College (Autonomous) is a renowned B School
            with its Management Courses flourishing with great results.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <img
            src="images/img2.jpg"
            alt="img2"
            className="d-block w-100 abt-img2"
          />
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6} sm={12}>
          <img
            src="images/img3.jpg"
            alt="img3"
            className="d-block w-100 abt-img3 "
          />
        </Col>
        <Col md={6} sm={12}>
          <h4>Mansion</h4>
          <p className="abt-p my-3">
            Close to four decades now the Institution under the hawk’s eye
            vision of its Chairman has been continuously working towards the
            growth approaching several branches and holding a proud position in
            the field of education. Today 13 years down the lane we are proud to
            announce that Presidency College (Autonomous) is a renowned B School
            with its Management Courses flourishing with great results.
            Presidency have made the choice to strive for excellence in all that
            we inculcate in our students to make them understand and imbibe
            honesty and competence and a will to break out of monotony to be
            creative so that they understand the power of imagination.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutPage;
