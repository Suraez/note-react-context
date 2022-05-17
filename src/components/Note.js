import React from "react";
import { Accordion } from "react-bootstrap";

const Note = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "60%" }}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.note.title}</Accordion.Header>
            <Accordion.Body>{props.note.body}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Note;
