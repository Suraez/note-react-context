import React, { useContext } from "react";
import Note from "./Note";
import { NoteContext } from "../context/NoteContext";

export default function Notelist() {
  const notesList = useContext(NoteContext)[0];
  return (
    <>
      {notesList && notesList.len !== 0 ? (
        notesList.map((note) => <Note key={note._id} note={note} />)
      ) : (
        <h3>No Notes Found!</h3>
      )}
    </>
  );
}
