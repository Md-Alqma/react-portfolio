import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const FixedHeader = {
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: "0",
    zIndex: "3",
    width: "100%",
  };
  return (
    <MDBNavbar style={FixedHeader} expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Alqma.Dev</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}>
          {" "}
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
      </MDBContainer>
      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
          <MDBNavbarItem>
            <MDBNavbarLink href="#home">Home</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#about">About</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#">Skills</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#">Portfolio</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="#">Contact</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}
