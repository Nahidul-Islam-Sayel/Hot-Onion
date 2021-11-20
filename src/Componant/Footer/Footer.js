import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { AiFillFacebook , AiFillTwitterCircle , FaLinkedin } from "react-icons/ai";
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
        
            <ul>
              <li className="list-unstyled">
               <AiFillFacebook/>
              </li>
              <li className="list-unstyled">
              <AiFillTwitterCircle/>
              </li>
              <li className="list-unstyled">
              <AiFillTwitterCircle/>
              </li>
              <li className="list-unstyled">
              <AiFillTwitterCircle/>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Hot Onino Master</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;