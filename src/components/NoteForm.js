import axios from "axios";
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { NoteContext } from "../context/NoteContext";

const NoteForm = () => {
  const [noteList, setNotesList] = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      body,
    };
    console.log(newNote);
    axios
      .post("https://myflutternoteapp.herokuapp.com/note/create", newNote)
      .then((response) => {
        console.log(response);
        alert("Yay! you added new task");
        setNotesList([
          ...noteList,
          {
            title: response.data.data.title,
            body: response.data.data.body,
            _id: response.data.data._id,
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "80%",
          border: "2px solid black",
          padding: "20px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          margin: "20px",
        }}
      >
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter yor title"
              name="tilte"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="blah blah blah"
              name="description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.button1">
            <Button className="bg-info" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default NoteForm;
