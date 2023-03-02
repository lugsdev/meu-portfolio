import './App.css';
import NavBarMenu from './components/NavBarMenu';
import "bootstrap/dist/css/bootstrap.min.css"
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Banner />
      <Skills />
      {/* Colocar no Footer
      <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
      Foto de <a href="https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Milad Fakurian</a> na <a href="https://unsplash.com/pt-br/fotografias/nY14Fs8pxT8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   */}
    </div>
  );
}

export default App;
