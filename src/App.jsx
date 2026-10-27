import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';


function App() {
  
  return(
    <main className="mainBody">
      <Header />
      <div className='content'>
        <Home />
        <About />
        <Projects />
      </div>
    </main>
  );

}

export default App
