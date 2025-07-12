
import{BrowserRouter as Router,Route,Link,Routes}from"react-router-dom";
import './App.css';
import About from"./pages/About";
import Contact from"./pages/Contact";
 import Characterdetail from"./pages/CharacterDetail";
import Home from"./pages/Home";
function App() {
  return (
    <Router>
      <div className="container">
        <header className="head">
          <h3 className="gg">Welcome</h3>
          <nav className="navb">
             <Link to="/" className="navlink">Home</Link>
            <Link to="/a" className="navlink">About</Link>
                    <Link to="/g" className="navlink">Contact</Link>
                          
          </nav>
        </header>

        <main className="maincontent">
          <Routes>
                  
            <Route path="/a" element={<About/>}/>
            
                            <Route path="/" element={<Home/>}/>

                            <Route path="/g" element={<Contact/>}/>
                            <Route path="/character/:id" element={<Characterdetail/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
