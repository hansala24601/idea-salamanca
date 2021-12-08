import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';

function App() {
  return (
    <div className="App">

      <NavBar/>

      <NavLogin />

      <h1>Hard random pop</h1>

      <b>"Random stuff for random people"</b>

    </div>
  );
}

export default App;
