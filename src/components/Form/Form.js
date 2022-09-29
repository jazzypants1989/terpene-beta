import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagesAdded } from "../Pages/PagesSlice";
import { selectAllUsers } from "../Users/usersSlice";
import { Container, AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [userID, setUserID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const page = { title, description, type };
    console.log(page);
  };

  const OnTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const OnDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const OnTypeChange = (e) => {
    setType(e.target.value);
  };

  const onSavePageClicked = () => {
    if (title && description) {
      dispatch(pagesAdded(title, description, type));
      setTitle("");
      setDescription("");
      setType("");
    }
  };
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          The Cannabis Terpene Reference Guide
        </Typography>
      </AppBar>
      <main>
        <h2>Add an article to the database!</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={OnTitleChange}
          ></input>
          <label htmlFor="">Description</label>
          <textarea
            required
            value={description}
            onChange={OnDescriptionChange}
          ></textarea>
          <fieldset>
            <legend>Type</legend>
            <label>
              <input
                type="radio"
                value="terpene"
                checked={type === "terpene"}
                onChange={OnTypeChange}
              />
              Terpene
            </label>
            <label>
              <input
                type="radio"
                value="strain"
                checked={type === "strain"}
                onChange={OnTypeChange}
              />
              Strain
            </label>
            <label>
              <input
                type="radio"
                value="benefit"
                checked={type === "benefit"}
                onChange={OnTypeChange}
              />
              Benefit
            </label>
            <label>
              <input
                type="radio"
                value="effect"
                checked={type === "effect"}
                onChange={OnTypeChange}
              />
              Effects
            </label>
            <label>
              <input
                type="radio"
                value="nature"
                checked={type === "nature"}
                onChange={OnTypeChange}
              />
              Natural Occurence
            </label>
            <label>
              <input
                type="radio"
                value="research"
                checked={type === "research"}
                onChange={OnTypeChange}
              />
              Research
            </label>
            <label>
              <input
                type="radio"
                value="scent"
                checked={type === "scent"}
                onChange={OnTypeChange}
              />
              Scent
            </label>
          </fieldset>
          <button
            type="button"
            onClick={onSavePageClicked}
            disabled={!title || !description}
          >
            Add Page
          </button>
        </form>
      </main>
    </Container>
  );
};
export default Form;
