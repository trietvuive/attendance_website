import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getDate(index){
	var date = new Date('2022-01-29');
	date.setDate(date.getDate() + 7*index);
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2,'0');
	return mm + '/' + dd;
}

function Student(props) {
	
  const [studentState, setStudentState] = useState([]);
  const get_URL = 'https://u114t8jx82.execute-api.us-east-1.amazonaws.com/latest/orders/'
  const handleSubmit = function(){
	  console.log(Math.random())
	  console.log(JSON.stringify(studentState))
	  axios
      .post(get_URL, JSON.stringify(studentState))
      .then(d => {
        console.log(d);
      })
      .catch(er => alert(er));
  }
  useEffect(() => {
	  
	/*  
	axios.get('https://ckyj1ird5h.execute-api.us-east-1.amazonaws.com/latest/attendance').then(response => 
	{
		var studentState = response.data
		setStudentState(response.data)
		
		setStudentState(
		  studentState.map(d => {
			return {
			  StudentID: d.StudentID,
			  StudentName: d.StudentName,
			  data_array: 'data_array' in d ? [ ...d.data_array, ...Array(Math.max(17 - d.data_array.length, 0)).fill(false)] : Array(17).fill(false)
			};
		  }))

  })*/
	
	// Test data. Lambda API charge like a bitch so
	
	let studentState = [{StudentName:"Your Mom",data_array:[1,2,3,4],StudentID:"637d12fb-ce8c-49cc-9e3d-4edb868fbaaf"},{StudentName:"Your Mom",StudentID:"1234"}]
	
	console.log(studentState)

    setStudentState(
      studentState.map(d => {
        return {
		  StudentID: d.StudentID,
          StudentName: d.StudentName,
          data_array: 'data_array' in d ? [ ...d.data_array, ...Array(Math.max(17 - d.data_array.length, 0)).fill(false)] : Array(17).fill(false)
        };
      })
    );
	console.log("The fuck?")
	
	
  }, []);

  return (
    <div className="container">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
		  onClick={handleSubmit}
        >
          Submit
        </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
			{[...Array(17)].map(
			(value: undefined, index: number) => (
				<th scope="col" key={index}>{getDate(index)}</th>
			  )
			)}
          </tr>
        </thead>
        <tbody>
          {studentState.map((d, i) => (
			  <tr key={d.StudentID}>
              <td>{d.StudentName}</td>
					{d.data_array.map((b,idx) => (
						<th scope="row" key={idx}>
							<input
							onChange={event => {
								let checked = event.target.checked;
								setStudentState(studentState.map(data => {
									if (d.StudentID === data.StudentID) {
										data.data_array[idx] = checked;
									}
									console.log(data)
									return data;
									})
								);
							}}
							type={props.type}
							size = "3"
							checked={d.data_array[idx]}
							value={d.data_array[idx]}
							></input>
						</th>)
					)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
