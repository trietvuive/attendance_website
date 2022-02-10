import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Get the nth meeting date, meeting start from January 29th
function getDate(index){
	const date = new Date('2022-02-11');
	date.setDate(date.getDate() + 7*index);
	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2,'0');
	return mm + '/' + dd;
}

//Used for rendering the DataTable
//Fetch from API, set APIGet to true, render the dataTable
function DataTable(props)
{
	
}


function Student(props) {
	
  let [studentState, setStudentState] = useState([]);
  const getURL = 'https://ckyj1ird5h.execute-api.us-east-1.amazonaws.com/latest/' + props.name
  const handleSubmit = function(){
	  for(const student of studentState){
		  let data = {
			  "data": student.data_array
		  }
		  axios.put(getURL + '/' + student.StudentID, data)
		  .then(d => {
			  
		  }).catch(er => alert(er));
		}
		alert("Submitted")
	}
	useEffect(() => {
	  
	
	axios.get(getURL).then(response => 
	{
		let studentState = response.data
		setStudentState(response.data)
		/* I had a genius idea to make this a map so I don't have to iterate through everyone every fucking time but it doesn't work
		console.log(studentState.reduce(function(map, s){
			map[s.StudentID] = {'Name': s.StudentName,
								'Data': 'data_array' in s ? [ ...s.data_array, ...Array(Math.max(17 - s.data_array.length, 0)).fill(false)] : 
									   Array(17).fill(false)}
			return map
		}, {}))
		*/
		setStudentState(
		  studentState.map(d => {
			return {
			  StudentID: d.StudentID,
			  StudentName: d.StudentName,
			  data_array: 'data_array' in d ? [ ...d.data_array, ...Array(Math.max(17 - d.data_array.length, 0)).fill(false)] : Array(17).fill(false)
			};
		  }))
    })
	
  }, [props.name]);

  return (
    <div className="container">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
		  onClick={handleSubmit}>
          Submit
        </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
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
              <td>{d.StudentID}</td>
					{'data_array' in d && d.data_array.map((b,idx) => (
						<th scope="row" key={idx}>
							<input
							onChange={event => {
								setStudentState(studentState.map(data => {
									if (d.StudentID === data.StudentID) {
										if(props.type === 'number')
											data.data_array[idx] = parseInt(event.target.value)
										else
											data.data_array[idx] = event.target.checked;
									}
									return data;
									})
								);
							}}
							type={props.type}
							size = "3"
							value={d.data_array[idx]}
							checked={d.data_array[idx]}
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
