import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getDate(index){
	var date = new Date('2022-01-29');
	date.setDate(date.getDate() + 7*index);
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2,'0');
	return mm + '/' + dd;
}

function Student() {
  const [studentState, setStudentState] = useState([]);

  useEffect(() => {
    let studentState = [
      { name: "Stone"},
      { name: "StoneThrower"},
      { name: "StoneCatcher"}
	  ];

    setStudentState(
      studentState.map(d => {
        return {
          name: d.name,
          select: Array(17).fill(false)
        };
      })
    );
	
  }, []);
  console.log(studentState)

  return (
    <div className="container">
      <Link to="/add">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
        >
          Add
        </button>
      </Link>
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
			  <tr key={d.name}>
              <td>{d.name}</td>
					{d.select.map((b,idx) => (
						<th scope="row" key={idx}>
							<input
							onChange={event => {
								let checked = event.target.checked;
								setStudentState(studentState.map(data => {
									if (d.name === data.name) {
										data.select[idx] = checked;
									}
									console.log(data)
									return data;
									})
								);
							}}
							type="checkbox"
							checked={d.select[idx]}
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
