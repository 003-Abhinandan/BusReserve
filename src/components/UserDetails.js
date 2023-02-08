import React, { useState } from 'react';
import './UserDetails.css';

function UserDetails({ user, reservations, updateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const updatedUser = { ...user, email, firstName, lastName };
    updateUser(updatedUser);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }

  return (
    <div className="user-details-container">
      <h1>My Account</h1>
      {isEditing ? (
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            First Name:
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Email: {user.email}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
      <h2>My Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Reservation Id</th>
            <th>Bus Id</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cost</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {reservations.filter(r => r.userId === user.id).map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.busId}</td>
              <td>{r.destination}</td>
              <td>{r.date}</td>
              <td>{r.time}</td>
              <td>{r.cost}</td>
              <td>{r.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;

