import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todo");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => {
        history.push("/");
      });
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Create a new note
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          label="Title"
          color="secondary"
          fullWidth
          required
          sx={{ margin: "10px 0" }}
          error={titleError}
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          value={details}
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={5}
          sx={{ margin: "10px 0" }}
          error={detailsError}
        />
        <section style={{ margin: "10px 0" }}>
          <FormControl>
            <FormLabel color="secondary" id="demo-radio-buttons-group-label">
              Category
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={category}
              name="radio-buttons-group"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <FormControlLabel
                value="todo"
                control={<Radio color="secondary" />}
                label="todo"
              />
              <FormControlLabel
                value="personal"
                control={<Radio color="secondary" />}
                label="personal"
              />
              <FormControlLabel
                value="work"
                control={<Radio color="secondary" />}
                label="work"
              />
            </RadioGroup>
          </FormControl>
        </section>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<MdSend />}
          sx={{ margin: "10px 0" }}
        >
          submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
