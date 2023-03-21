import Navbar from './Navbar'
import Home from './Home'
import Catalogo from './Catalogo';
import Novo from './Novo';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/Catalogo":
      Component = <Catalogo />
      break
    case "/Novo":
      Component = <Novo />
      break
  }
  return (
    <div className="App">
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
