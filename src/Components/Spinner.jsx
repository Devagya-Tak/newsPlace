import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
