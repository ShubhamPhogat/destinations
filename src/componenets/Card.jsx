import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "../stylesheets/card.css";
import axios from "axios";
const Card = (props) => {
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

  let handleEdit = (e) => {
    props.setFormData(props.data);
    let form = document.getElementById("form");
    let bg = document.getElementById("bg");
    bg.classList.toggle("blur");
    form.classList.toggle("hide");
  };

  let handleClick = async (e) => {
    await axios
      .delete(`http://localhost:3001/delete?id=${props.data.id}`)
      .then((res) => {
        alert("deleted sucessfully");
        setTimeout(() => {
          loadData();
        }, 500);
      })
      .catch((e) => {
        alert("can't delete the destination");
        console.log(e);
      });
  };

  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="imgCont">
          <MdDelete onClick={handleClick} className="bin" />
          <MdEdit onClick={handleEdit} className="edit" />
          <img
            src={
              props.data.image_src ||
              "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW91bnRhaW4lMjBMb2RnZSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D"
            }
            onError={(e) =>
              (e.target.src =
                "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW91bnRhaW4lMjBMb2RnZSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D")
            }
            className="img"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.description}</p>
          <a href="#" className="btn btn-warning">
            location <IoLocationSharp />
          </a>
          <p>{props.data.location}</p>
          <br></br>
          <h3>opening hours</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
