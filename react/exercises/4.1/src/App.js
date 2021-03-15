import logo from './logo.svg';
import './App.css';
import Button from './Button.component';

function App() {
  return (
    <div className="App">
      <Button fontWeight="bold" text="Important" />
      <Button fontWeight="normal" text="Not Important" />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>AppleSeeds React App</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Click Me
</a>
</header> */
}
