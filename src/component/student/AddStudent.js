import React, {useState, useEffect} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


function AddStudent() {
  const post_URL = 'https://ckyj1ird5h.execute-api.us-east-1.amazonaws.com/latest/student'
  const [message, setMessage] = useState("")
  const [isAdded, setIsAdded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  
  const ActionForm = ({method, identifier}) => {
	  return (
	  <>
	  <form
        onSubmit={e => {
          e.preventDefault();
          method(e);
        }}>
        <div className="form-group">
          <label>{identifier}</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
	  </>
	  )
  };
  

  const addStudent = e => {
	let data = {
		"name": e.target[0].value
	};
	
    axios
      .post(post_URL, data)
      .then(d => {
        console.log(d);
		setIsAdded(true);
		setMessage(d.data);
      })
      .catch(er => alert(er));
  };
  
  const deleteStudent = e => {
	let data = {
		"id": e.target[0].value
	};
    axios
      .delete(post_URL, {data : data})
      .then(d => {
        console.log(d);
		setIsDeleted(true);
		setMessage(d.data);
      })
      .catch(er => alert(er));
  }
  return (
    <div className="container my-3">
		<div style={{marginTop: "25px"}}> Adding
			<ActionForm method={addStudent} identifier="Name" />
			{isAdded && <div style={{marginTop: "25px"}}>{message}</div>}
		</div>
		<div style={{marginTop: "25px"}}> Deleting
			<ActionForm method={deleteStudent} identifier="ID" />
			{isDeleted && <div style={{marginTop: "25px"}}>{message}</div>}
		</div>
    </div>
  );
}

export default AddStudent;
