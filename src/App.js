import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NewComponent prop="27" pushi="example"/>
        <NewComponent prop="28"/>
        <NewComponent prop="29"/>

        <FunctionalComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello everyone
        </a> */}
      </header>
    </div>
  );
}

export default App;
