import axios from "axios";
import React, { useState } from "react";
import "../stylesheets/createForm.css";
const CreateForm = (props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("dummy");

  let loadData = async (e) => {
    await axios
      .get("http://localhost:3001/getData")
      .then((res) => {
        props.setdata(res.data);
      })
      .catch((e) => {
        console.log("error in fethcing the data", e);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newData = {
      name: name,
      location: location,
      description: description,
      openingHours: openingHours,
      image_src: image,
    };

    await axios
      .post(`http://localhost:3001/create`, newData)
      .then((res) => {
        alert("new destination added succesfully");
        setTimeout(() => {
          loadData();
        }, 500);
      })
      .catch((err) => {
        alert("cant update the information");
      });
    let form = document.getElementById("createForm");
    let bg = document.getElementById("bg");
    bg.classList.toggle("blur");
    form.classList.toggle("hide2");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div id="createForm" className="container_form2 hide2">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Destination</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="opening-hours">Opening Hours:</label>
          <input
            type="text"
            id="opening-hours"
            name="opening-hours"
            value={openingHours}
            onChange={(e) => setOpeningHours(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image-upload">Image Upload:</label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
