import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Heading One</h1>
        <p>New Paragraph</p>
        <ul>
          <li>
            Item 1
          </li>
          <li>
            Item 2
          </li>
          <li>
            Item 3
          </li>
        </ul>
        <p>
          React is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
