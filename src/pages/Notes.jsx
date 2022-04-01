import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <div style={{ margin: "0 20px" }}>
      <Grid container spacing={2}>
        {notes.map((note, idx) => {
          return (
            <Grid item key={idx} xs={12} sm={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Notes;
