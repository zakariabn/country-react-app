import "./App.css";
import Countries from "./components/countries/Countries";
import Nav from "./components/header/nav-bar/nav";

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Countries></Countries>
      </main>
    </div>
  );
}

export default App;
