import React, { useState } from 'react';
import '../styles/BirthdateForm.css';

const BirthdateForm = ({ onBirthdateChange }) => {
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBirthdateChange(birthdate);
  };

  return (
    <form onSubmit={handleSubmit} className="birthdate-form">
      <label htmlFor="birthdate">Life is short, enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BirthdateForm;