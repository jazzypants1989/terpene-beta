import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPage } from "../Pages/PagesSlice";
import { selectAllUsers } from "../Users/usersSlice";
import { Container, AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [userID, setUserID] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const page = { title, description, type, userID };
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

  const OnUserChange = (e) => {
    setUserID(e.target.value);
  };

  const canSave =
    [title, description, type, userID].every(Boolean) &&
    addRequestStatus === "idle";

  const onSavePageClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPage({ title, description, type, userID })).unwrap();
        setTitle("");
        setDescription("");
        setType("");
        setUserID("");
      } catch (err) {
        console.error("Failed to save the page: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.userName}
    </option>
  ));

  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          The Cannabis Terpene Reference Guide
        </Typography>
      </AppBar>
      <main>
        <h2>Add an article to the database!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            value={title}
            onChange={OnTitleChange}
          ></input>
          <label htmlFor="postUser">User</label>
          <select id="PostUser" value={userID} onChange={OnUserChange}>
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="">Description</label>
          <textarea
            required
            id="description"
            name="description"
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
          <button type="button" onClick={onSavePageClicked} disabled={!canSave}>
            Add Page
          </button>
        </form>
      </main>
    </Container>
  );
};
export default Form;
