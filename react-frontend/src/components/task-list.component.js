import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const TaskList = () => {
  const [tasks, setTask] = useState([]);
 
  useEffect(() => {
    getTasks();
  }, []);
 
  const getTasks = async () => {
    const response = await axios.get("https://localhost:8080/tasks/all");
    console.log(response.data)
    setTask(response.data);
  };
 
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="addTask" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>

                <td>
                
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default TaskList;