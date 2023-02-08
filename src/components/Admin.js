import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const [busRoutes, setBusRoutes] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleFetchUsers() {
    axios.get('/user/')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }

  function handleFetchBusRoutes() {
    axios.get('/api/bus-routes')
      .then(res => setBusRoutes(res.data))
      .catch(err => console.error(err));
  }

  function handleFetchReservations() {
    axios.get(`/api/reservations?start_date=${startDate}&end_date=${endDate}`)
      .then(res => setReservations(res.data))
      .catch(err => console.error(err));
  }

  function handleCreateUser(userData) {
    axios.post('/api/users', userData)
      .then(res => handleFetchUsers())
      .catch(err => console.error(err));
  }

  function handleUpdateUser(userId, userData) {
    axios.put(`/api/users/${userId}`, userData)
      .then(res => handleFetchUsers())
      .catch(err => console.error(err));
  }

  function handleDeleteUser(userId) {
    axios.delete(`/api/users/${userId}`)
      .then(res => handleFetchUsers())
      .catch(err => console.error(err));
  }

  function handleCreateBusRoute(busRouteData) {
    axios.post('/api/bus/ad', busRouteData)
      .then(res => handleFetchBusRoutes())
      .catch(err => console.error(err));
  }

  function handleUpdateBusRoute(busRouteId, busRouteData) {
    axios.put(`/api/bus-routes/${busRouteId}`, busRouteData)
      .then(res => handleFetchBusRoutes())
      .catch(err => console.error(err));
  }

  function handleDeleteBusRoute(busRouteId) {
    axios.delete(`/api/bus-routes/${busRouteId}`)
      .then(res => handleFetchBusRoutes())
      .catch(err => console.error(err));
  }
  
  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      <h2>Users</h2>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdateUser(user._id, user)}>Update</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Bus Routes</h2>
      <button onClick={handleFetchBusRoutes}>Fetch Bus Routes</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Date/Time</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {busRoutes.map(busRoute => (
            <tr key={busRoute._id}>
              <td>{busRoute._id}</td>
              <td>{busRoute.source}</td>
              <td>{busRoute.destination}</td>
              <td>{busRoute.dateTime}</td>
              <td>{busRoute.cost}</td>
              <td>
                <button onClick={() => handleUpdateBusRoute(busRoute._id, busRoute)}>Update</button>
                <button onClick={() => handleDeleteBusRoute(busRoute._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Reservations</h2>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}/>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}/>
        <button onClick={handleFetchReservations}>Fetch Reservations</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Bus Route ID</th>
            <th>Date/Time</th>
            <th>Seats</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation._id}</td>
              <td>{reservation.userId}</td>
              <td>{reservation.busRouteId}</td>
              <td>{reservation.dateTime}</td>
              <td>{reservation.seats}</td>
              <td>{reservation.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

