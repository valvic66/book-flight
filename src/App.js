import './App.css';
import { FlightCombo } from './components/FlightCombo';
import { DateField } from './components/DateField';
import { SubmitButton } from './components/SubmitButton';

function App() {
  const options = ['one-way flight', 'return flight'];

  const handleFlightComboChange = event => {
    console.log(event.target.value);
  };

  const handleStartDateChange = event => {
    console.log(event.target.value);
  };

  const handleArrivalDateChange = event => {
    console.log(event.target.value);
  };

  const handleSubmitClick = () => {
    console.log('submit btn clicked');
  };

  return (
    <div className="App">
      <FlightCombo options={options} onChange={handleFlightComboChange} />
      <DateField onChange={handleStartDateChange} />
      <DateField onChange={handleArrivalDateChange} />
      <SubmitButton text='Book' onClick={handleSubmitClick} />
    </div>
  );
}

export default App;
