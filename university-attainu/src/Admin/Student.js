import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";

const Student = () => {
  const [student] = useState([]);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   console.log(res);
    //   setStudent(res.data );
    //   console.log("student", student);
    // });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>UserEmail</th>
          </tr>
        </thead>

        <tbody>
          {
          student.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Student;
