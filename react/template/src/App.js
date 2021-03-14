import logo from './logo.svg';
import './App.css';

const data = ['hello', 'world'];
const number1 = 5;
const number2 = 6;
const string = 'I love React!';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data[0].slice(0, 1).toUpperCase() +
            data[0].slice(1) +
            ' ' +
            data[1].slice(0, 1).toUpperCase() +
            data[1].slice(1)}
        </p>
        <p>{'number1 + number2 = ' + (number1 + number2)}</p>
        <p>The string length is {string.length}</p>
      </header>
    </div>
  );
}

export default App;
