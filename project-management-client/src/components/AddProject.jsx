import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

import projectsService from "../services/projects.service";
function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  const [errorMessage,setErrorMessage] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, rating };

    projectsService.createProject(requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshProjects();
      })
      .catch((error) => {console.log(error)
                        setErrorMessage(error.response.data.message)});
  };


  return (
    <div className="AddProject">
      <h3 id="add-project">Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;