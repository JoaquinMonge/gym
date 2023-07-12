import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calendario.css";

const Calendario = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const navigate = useNavigate();
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleClickVolver = () => {
    navigate("/inicio");
  };
  const scheduleData = [
    {
      time: "8:00 AM",
      Monday: "Joaquin  Angelina",
      Tuesday: "Javi  Melissa",
      Wednesday: "Lunch",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
    {
      time: "10:00 AM",
      Monday: "",
      Tuesday: "",
      Wednesday: "Roberto  Andrea  Juan",
      Thursday: "",
      Friday: "Pablo  Maria  ",
      Saturday: "",
      Sunday: "",
    },
    {
      time: "2:00 PM",
      Monday: "Andrea  Pablo  Ricardo",
      Tuesday: "",
      Wednesday: "",
      Thursday: "Julian  Rebeca  Maria",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
    {
      time: "4:00 PM",
      Monday: "",
      Tuesday: "Marco  Andrea  ",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
    {
      time: "6:00 PM",
      Monday: "",
      Tuesday: "",
      Wednesday: "Joaquin",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: " Andres  Ana",
    },
  ];

  return (
    <div className="weekly-schedule">
      <button className="volverHorario" onClick={handleClickVolver}>
        Volver
      </button>

      <h2>Weekly Schedule</h2>
      <div className="month-select">
        <label htmlFor="month-select">Select Month:</label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {monthsArray.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.time}</td>
              <td>{schedule.Monday}</td>
              <td>{schedule.Tuesday}</td>
              <td>{schedule.Wednesday}</td>
              <td>{schedule.Thursday}</td>
              <td>{schedule.Friday}</td>
              <td>{schedule.Saturday}</td>
              <td>{schedule.Sunday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendario;
