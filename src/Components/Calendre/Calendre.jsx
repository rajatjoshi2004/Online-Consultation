import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Select Date And Time </h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="Pp"
        timeFormat="HH:mm"
        className="form-control"
        placeholderText="Select a date and time"
      />
      {selectedDate && (
        <div className="mt-3">
          <strong>Selected Date and Time:</strong> {selectedDate.toString()}
        </div>
      )}
    </div>
  );
}

export default App;
