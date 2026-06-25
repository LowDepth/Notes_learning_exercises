import Note from "../components/Note";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import axios from "axios";
import AddNotes from "../components/AddNotes";
import noteService from "../services/notes";
import Notification from "../components/Notification";
import Footer from "../components/Footer";

const Example3 = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //JUST A TEST////////////////////////

  ////////////////////////////////////

  //Fetch the data from the server
  useEffect(() => {
    noteService.getAll().then((inicialNotes) => setNotes(inicialNotes));
  }, []);

  //adds a new note to the list
  const addNote = (event) => {
    event.preventDefault(); //prevents the page from refreshing
    const noteObject = {
      //Create a new object with the information in the input
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNotes) => {
      setNotes(notes.concat(returnedNotes));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const handleShowAllNotes = () => {
    setShowAll(!showAll);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNotes) => {
        setNotes(notes.map((note) => (note.id === id ? returnedNotes : note)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server.`,
        );
        //setTimeout(() => {
        //  setErrorMessage(null);
        //}, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Notes</h1>
        <Notification message={errorMessage} type="primary" />

        <ul className="list-group">
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>

        <AddNotes
          addNote={addNote}
          newNote={newNote}
          handleNoteChange={handleNoteChange}
          showAll={showAll}
          handleShowAllNotes={handleShowAllNotes}
        />
      </div>
    </>
  );
};

export default Example3;
