import React from 'react';
import Calendre from '../Calendre/Calendre';
import CareerConsultancyForm from '../CareerConsultForm/Form';

const Grid = () => {
  return (
    <div className="container my-5 py-4" style={{ height: '85vh', backgroundColor: '#f0f8ea', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '2vh' }}>
      {/* Service Information */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <h2 style={{ color: '#4caf50' }}>Service Name</h2>
          <p>Check out availability and book the date and time that works for you</p>
        </div>
      </div>

      {/* Career Consultancy Form */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="text-center mb-3" style={{ backgroundColor: '#4caf50', color: '#fff', borderRadius: '8px', padding: '10px' }}>
            <h5>Career Consultancy Form</h5>
          </div>
          <div className="text-center mb-3">
            <CareerConsultancyForm />
          </div>
        </div>
      </div>

      {/* Select Date and Time */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center" style={{ backgroundColor: '#4caf50', color: '#fff', borderRadius: '8px', padding: '10px' }}>
          <h5>Select Date and Time</h5>
        </div>
      </div>

      {/* Calendar */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="text-center mb-3" style={{ backgroundColor: '#e0f2f1', borderRadius: '8px', padding: '20px' }}>
            <Calendre />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
