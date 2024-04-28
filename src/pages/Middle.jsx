import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../componenets/Card";
import "../stylesheets/middle.css";
import Form from "../componenets/Form";
import CreateForm from "../componenets/CreateForm";
const Middle = () => {
  let [data, setdata] = useState([]);
  let [formData, setFormData] = useState({});
  let fetchData = async () => {
    data = await axios
      .get("http://localhost:3001/getData")
      .then((res) => {
        setdata(res.data);
      })
      .catch((e) => {
        console.log("error in fethcing the data", e);
      });
  };

  useEffect(() => {
    console.log(formData);
  }, [setFormData]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div id="bg" className="container belt">
        <div className="row">
          {data &&
            data.map((ele, index) => (
              <Card data={ele} setdata={setdata} setFormData={setFormData} />
            ))}
        </div>
      </div>
      <div className="editForm">
        <Form data={formData} setdata={setdata} />
        <CreateForm setdata={setdata} />
      </div>
    </div>
  );
};

export default Middle;
