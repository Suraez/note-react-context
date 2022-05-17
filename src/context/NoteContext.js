import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    axios
      .get("https://myflutternoteapp.herokuapp.com/note/all")
      .then((response) => {
        setNotesList(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const messag
  return (
    <NoteContext.Provider value={[notesList, setNotesList]}>
      {props.children}
    </NoteContext.Provider>
  );
};
