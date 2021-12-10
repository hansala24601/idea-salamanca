import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';
import MiFooter from './components/MiFooter';




function App() {
  return (
    <div className="App">

      <NavLogin />

      <NavBar/>

      <div class="container" id="principal">
        <h1>Hard random pop</h1>
        <b>"Random stuff for random people"</b>



      </div>

      

      <MiFooter/>

    </div>

    
  );
}

export default App;
