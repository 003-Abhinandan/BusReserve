import React, { useState } from 'react';
import './BusSchedule.css';

function BusSchedule() {
    const img="./Public/Bus_Stand.png"
    const styles = {
        backgroundImage: `url(${img})`
      }

  const [selectedBus, setSelectedBus] = useState(null);
  const [reservationId, setReservationId] = useState(null);
  const [buses, setBuses] = useState([
    {
      busId: 'B1',
      source: 'New Delhi',
      destination: 'Noida',
      date: '01/01/2023',
      time: '9:00 AM',
      cost: 'RS 50',
      seats: 20
    },
    {
      busId: 'B2',
      source: 'Kolkata',
      destination: 'Durgapur',
      date: '01/02/2022',
      time: '12:00 PM',
      cost: 'RS 75',
      seats: 15
    },
    // Add more buses here for next 5 days
  ]);

  function handleSelectBus(bus) {
    setSelectedBus(bus);
  }

  function handleReserve() {
    if (!selectedBus) {
      alert('Please select a bus');
      return;
    }
    if (selectedBus.seats === 0) {
      alert('Sorry, this bus is fully booked');
      return;
    }
      // Reserve a seat
      const newBuses = buses.map(b => {
        if (b.busId === selectedBus.busId) {
          return { ...b, seats: b.seats - 1 };
        }
        return b;
      });
      setBuses(newBuses);
      // Generate a reservation Id
      const reservation = Math.floor(Math.random() * 1000000);
      setReservationId(reservation);
    }
  
    return (
      <div className="bus-schedule-container">
        <h1>Bus Schedule</h1>
        <table>
          <thead>
            <tr>
              <th>Bus Id</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Time</th>
              <th>Cost</th>
              <th>Seats Available</th>
            </tr>
          </thead>
          <tbody>
            {buses.map(bus => (
              <tr key={bus.busId} onClick={() => handleSelectBus(bus)}>
                <td>{bus.busId}</td>
                <td>{bus.source}</td>
                <td>{bus.destination}</td>
                <td>{bus.date}</td>
                <td>{bus.time}</td>
                <td>{bus.cost}</td>
                <td>{bus.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedBus && (
          <div className="reservation-container">
            <h2>Selected Bus</h2>
            <div>
              <p>Bus Id: {selectedBus.busId}</p>
              <p>Source: {selectedBus.source}</p>
              <p>Destination: {selectedBus.destination}</p>
              <p>Date: {selectedBus.date}</p>
            <p>Time: {selectedBus.time}</p>
            <p>Cost: {selectedBus.cost}</p>
            <p>Seats Available: {selectedBus.seats}</p>
          </div>
          <button onClick={handleReserve}>Reserve</button>
        </div>
      )}
      {reservationId && (
        <div className="confirmation-container">
          <h2>Reservation Confirmed</h2>
          <p>Reservation Id: {reservationId}</p>
        </div>
      )}
    </div>
  );
}

export default BusSchedule;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BusSchedule.css';

// function BookTicket(props) {
//   const [buses, setBuses] = useState([]);
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

//   useEffect(() => {
//     // Fetch the list of buses from the API
//     axios.get('/api/buses')
//       .then(response => setBuses(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   function handleSelectBus(bus) {
//     setSelectedBus(bus);
//   }

//   function handleReserve() {
//     if (!isUserLoggedIn) {
//       alert('Please login to reserve a bus');
//       return;
//     }
//     if (!selectedBus) {
//       alert('Please select a bus to reserve');
//       return;
//     }
//     if (selectedBus.seats === 0) {
//       alert('Sorry, this bus is fully booked');
//       return;
//     }

//     // Reserve the selected bus
//     axios.post('/api/reserve', { busId: selectedBus.busId })
//       .then(response => {
//         // Update the list of buses with the updated seat information
//         const newBuses = buses.map(b => {
//           if (b.busId === selectedBus.busId) {
//             return { ...b, seats: b.seats - 1 };
//           }
//           return b;
//         });
//         setBuses(newBuses);
//       })
//       .catch(error => console.error(error));
//   }

//   return (
//     <div className="book-ticket-container">
//       <h1>Bus Schedule</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Bus Id</th>
//             <th>Source</th>
//             <th>Destination</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Cost</th>
//             <th>Seats Available</th>
//           </tr>
//         </thead>
//         <tbody>
//           {buses.map(bus => (
//             <tr key={bus.busId} onClick={() => handleSelectBus(bus)}>
//               <td>{bus.busId}</td>
//               <td>{bus.source}</td>
//               <td>{bus.destination}</td>
//               <td>{bus.date}</td>
//               <td>{bus.time}</td>
//               <td>{bus.cost}</td>
//               <td>{bus.seats}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedBus && (
//         <div className="selected-bus-container">
//           <h2>Selected Bus</h2>
//           <p>Bus Id: {selectedBus.busId}</p>
//           <p>Source: {selectedBus.source}</p>
//           <p>Destination: {selectedBus.destination}</p>
//           <p>Date: {selectedBus.date}</p>
//           <p>Time: {selectedBus.time}</p>
//           <p>Cost: {selectedBus.cost}</p>
//           <p>Seats Available: {selectedBus.seats}</p>
//           <button onClick={handleReserve}>Reserve</button>
//         </div>
//       )}
//     </div>
//   );
// }
// export default BookTicket;