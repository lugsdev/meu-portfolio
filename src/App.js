import './App.css';
import NavBarMenu from './components/NavBarMenu';
import "bootstrap/dist/css/bootstrap.min.css"
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Banner />

      {/* Colocar no Footer
      <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}
    </div>
  );
}

export default App;
