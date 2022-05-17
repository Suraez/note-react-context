import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NoteContext } from "../context/NoteContext";

const Header = () => {
  const notesList = useContext(NoteContext)[0];
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Suraj Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Total No of notes: {notesList.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button className="bg-info shadow" onClick={() => console.log("you are cool")}>
            Add Task
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
