import React from "react";
import {Row,Col}from 'react-bootstrap'
const Footer=()=>{
    const currentYear = new Date().getFullYear()
      return(
        
        <footer><b>
         <Row className="text-center">
            <Col>
            <p>Presidency University Bengaluru &copy; {currentYear}</p>
            </Col>
         </Row></b>
        </footer>
      )
}
export default Footer