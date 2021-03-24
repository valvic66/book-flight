import React, { useState } from 'react';
import './App.css';
import { FlightCombo } from './components/FlightCombo';
import { DateField } from './components/DateField';
import { SubmitButton } from './components/SubmitButton';
import { FLIGHT_OPTIONS, FLIGHT_OPT } from './constants/index';
import { isRetDateAfterDepDate, validateDate } from './utils/utils';

function App() {
  const [ departureDate, setDepartureDate ] = useState('27.03.2014');
  const [ returnDate, setReturnDate ] = useState('27.03.2014');
  const [ selectedFlightOption, setSelectedFlightOption ] = useState(FLIGHT_OPTIONS.ONE_WAY);
  const [ isValidDepDate, setDepDateValidation ] = useState(true);
  const [ isValidReturnDate, setReturnDateValidation ] = useState(true);
  const [ isDepInputFieldDisabled, setDepInputFieldStatus ] = useState(false);
  const [ isReturnInputFieldDisabled, setReturnInputFieldStatus ] = useState(true);
  const [ isSubmitButtonDisabled, setSubmitButtonStatus ] = useState(false);
  
  const handleFlightComboChange = event => {
    setSelectedFlightOption(event.target.value);

    if(event.target.value === FLIGHT_OPTIONS.RETURN_FLIGHT) {
      setReturnInputFieldStatus(false);
    } else {
      setReturnInputFieldStatus(true);
    }
  };

  const handleDepDateChange = event => {
    validateDate(event.target.value, setDepDateValidation, setDepartureDate);
  };

  const handleReturnDateChange = event => {
    validateDate(event.target.value, setReturnDateValidation, setReturnDate);

    if(isRetDateAfterDepDate(departureDate, event.target.value)) {
      setSubmitButtonStatus(false);
    } else {
      setSubmitButtonStatus(true);
    }
  };

  const handleSubmitClick = () => {
    console.log('submit btn clicked');
  };

  return (
    <div className="App">
      <FlightCombo
        options={FLIGHT_OPT}
        value={selectedFlightOption}
        onChange={handleFlightComboChange}
      />

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
