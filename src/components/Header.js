import React from "react";
import { Navbar, Image, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="navbar-style"  expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <Image
                src="images/logo.png"
                className="img-style"
                roundedCircle
              />
              <h6 className="logo-name-style" >
                Presidency University Bengaluru
              </h6>
            </Navbar.Brand>
          </LinkContainer>
          <b>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" >
                <LinkContainer to="/">
                  <Nav.Link href="#home"  className="about-link">Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about">
                  <Nav.Link href="/about">About</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Admission_Details" id="basic-nav-dropdown">
                  <LinkContainer to="/login/admin">
                    <NavDropdown.Item href="/login/admin">
                      Login as Admin
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Academic" id="basic-nav-dropdown">
                  <LinkContainer to="/admissionform">
                    <NavDropdown.Item href="/admissionform">
                      Admission
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/circularnotification'>
                  <NavDropdown.Item href="/circularnotification">
                    Circular and Notification
                  </NavDropdown.Item>
                  </LinkContainer>
                  {/* <NavDropdown.Item href="#">
                    Certificate Issued
                  </NavDropdown.Item> */}
                </NavDropdown>

                <NavDropdown title="Examination" id="basic-nav-dropdown">
                   {/* <NavDropdown.Item href="/guide">
                    Examination Guidelines
                  </NavDropdown.Item> */}
                  <LinkContainer to='/examapplication'>
                  <NavDropdown.Item href="/examapplication">
                    Examination Applications
                  </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/results">
                    <NavDropdown.Item href="/results">Results</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Departments" id="basic-nav-dropdown">
                  <LinkContainer to="/departments">
                  <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/departments">
                  <NavDropdown.Item href="#">
                    Computer Science An Engg
                  </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/departments">
                  <NavDropdown.Item href="#">Mechanical Engg</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </b>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
