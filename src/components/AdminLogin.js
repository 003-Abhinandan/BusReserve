
import React, { useState } from "react";
import Admin from "./Admin";
import './AdminLogin.css';
const AdminLogin = () => {
  const [adminId, setAdminId] = useState("Admin_01");
  const [password, setPassword] = useState("Admin");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleChange = event => {
    if (event.target.name === "id") {
      setId(event.target.value);
    } else if (event.target.name === "pwd") {
      setPwd(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (adminId === id && password === pwd) {
      setShowForm(false);
    } else {
      alert("Incorrect Admin ID or Password!");
    }
  };

  if (!showForm) {
    return <Admin />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Admin ID:
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
