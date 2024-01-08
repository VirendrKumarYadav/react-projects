import logo from './logo.svg';
import './App.css';
import Aside from './compo/Aside';
import About from './compo/About'



function App() {
  return (
    <div className="App flex ">
      <Aside />
     <About />
    </div>
  );
}

export default App;
