import React, {useState, useEffect} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddStudent() {
  const post_URL = 'https://ckyj1ird5h.execute-api.us-east-1.amazonaws.com/latest/student'
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const onSave = e => {
    let name = e.target[0].value;
    let data = {
		"name": name
    };
    addStudent(data);
  };
  

  const addStudent = data => {
    axios
      .post(post_URL, data)
      .then(d => {
        console.log(d);
		setIsSubmitted(true);
		setMessage(d.data);
      })
      .catch(er => alert(er));
  };
  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSave(e);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
	  {isSubmitted && <div style={{marginTop: "25px"}}>{message}</div>}
    </div>
  );
}

export default AddStudent;
