import React, { useState } from 'react';
import './App.css';
import { FlightCombo } from './components/FlightCombo';
import { DateField } from './components/DateField';
import { SubmitButton } from './components/SubmitButton';
import moment from 'moment';
import { FLIGHT_OPTIONS } from './constants/index';


function App() {
  const [departureDate, setDepartureDate] = useState('27.03.2014');
  const [returnDate, setReturnDate] = useState('27.03.2014');
  const [isValidDepDate, setDepDateValidation] = useState(true);
  const [isValidReturnDate, setReturnDateValidation] = useState(true);
  const [isDepInputFieldDisabled, setDepInputFieldStatus] = useState(false);
  const [isReturnInputFieldDisabled, setReturnInputFieldStatus] = useState(true);
  const [isSubmitButtonDisabled, setSubmitButtonStatus] = useState(false);
  
  const handleFlightComboChange = event => {
    console.log(event.target.value);
  };

  const handleDepDateChange = event => {
    validateDepDate(event.target.value);
  };
  const handleReturnDateChange = event => {
    validateReturnDate(event.target.value);
  };

  const validateDepDate = date => {
    const validDate = moment(date, ['DD.MM.YYYY'], true);

    setDepDateValidation(validDate.isValid());
    setDepartureDate(date);
    console.log(validDate.isValid());
  };
  const validateReturnDate = date => {
    const validDate = moment(date, ['DD.MM.YYYY'], true);

    setReturnDateValidation(validDate.isValid());
    setReturnDate(date);
    console.log(validDate.isValid());
  };

  const handleSubmitClick = () => {
    console.log('submit btn clicked');
  };

  return (
    <div className="App">
      <FlightCombo options={FLIGHT_OPTIONS} onChange={handleFlightComboChange} />

      <DateField
        onChange={handleDepDateChange}
        disabled={isDepInputFieldDisabled}
        isValidDate={isValidDepDate}
        date={departureDate}
      />

      <DateField
        onChange={handleReturnDateChange}
        disabled={isReturnInputFieldDisabled}
        isValidDate={isValidReturnDate}
        date={returnDate}
      />

      <SubmitButton text='Book' onClick={handleSubmitClick} disabled={isSubmitButtonDisabled} />
    </div>
  );
}

export default App;
