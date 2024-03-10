import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <Container>
      <marquee className="my-3">
        <h5>
          University results are out - Check Exam Results here!!!
          <Link to="/results">Click Here...</Link>Best of luck!!!
        </h5>
      </marquee>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-image-style"
            src="images/img1.jpg"
            alt="First Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-image-style"
            src="images/img2.jpg"
            alt="Second Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-image-style"
            src="images/img3.jpg"
            alt="Third Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-image-style"
            src="images/img4.jpg"
            alt="Fourth Slide"
          />
        </Carousel.Item>
      </Carousel>

      <Row className="my-5">
        <Col md={4} sm={12} className="p-style">
          <h4>
            <Link to="/about">Vision</Link>
          </h4>
          <p>
            Presidency have made the choice to strive for excellence in all that
            we inculcate in our students to make them understand and imbibe
            honesty and competence and a will to break out of monotony to be
            creative so that they understand the power of imagination.
          </p>
          <p>
            Close to four decades now the Institution under the hawk’s eye
            vision of its Chairman has been continuously working towards the
            growth approaching several branches and holding a proud position in
            the field of education.
          </p>
          <p>
            Today 13 years down the lane we are proud to announce that
            Presidency College (Autonomous) is a renowned B School with its
            Management Courses flourishing with great results.
          </p>
          <Link to="/about" className="btn btn-warning">
            Read More
          </Link>
        </Col>

        <Col md={4} sm={12} className="p-style">
          <h4>
            <Link to="/about">Mission</Link>
          </h4>

          <p>
            {" "}
            Today 13 years down the lane we are proud to announce that
            Presidency College (Autonomous) is a renowned B School with its
            Management Courses flourishing with great results.
          </p>
          <p>
            Presidency have made the choice to strive for excellence in all that
            we inculcate in our students to make them understand and imbibe
            honesty and competence and a will to break out of monotony to be
            creative so that they understand the power of imagination.
          </p>
          <p>
            Close to four decades now the Institution under the hawk’s eye
            vision of its Chairman has been continuously working towards the
            growth approaching several branches and holding a proud position in
            the field of education.
          </p>
          <Link to="/about" className="btn btn-warning">
            Read More
          </Link>
        </Col>

        <Col md={4} sm={12} className="p-style">
          <h4>
            <Link to="/about">Mansion</Link>
          </h4>
          <p>
            Close to four decades now the Institution under the hawk’s eye
            vision of its Chairman has been continuously working towards the
            growth approaching several branches and holding a proud position in
            the field of education.
          </p>
          <p>
            Today 13 years down the lane we are proud to announce that
            Presidency College (Autonomous) is a renowned B School with its
            Management Courses flourishing with great results.
          </p>
          <p>
            Presidency have made the choice to strive for excellence in all that
            we inculcate in our students to make them understand and imbibe
            honesty and competence and a will to break out of monotony to be
            creative so that they understand the power of imagination.
          </p>
          <Link to="/about" className="btn btn-warning">
            Read More
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeScreen;
