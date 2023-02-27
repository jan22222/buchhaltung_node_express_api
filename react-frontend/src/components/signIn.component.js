import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
 
  const signUser = async (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    // try {
    //   axios.post("http://localhost/signin", {
    //     name,
    //     password
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  }
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={signUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">password</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="password"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default SignIn;