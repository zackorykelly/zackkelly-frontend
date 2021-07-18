import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link className="nav-logo" to="/">
            Zack Kelly
          </Link>
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
          <Link className="nav-link" to="/contact">
            Contact Me
          </Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <header className="App-header">
              <h1>Zack Kelly</h1>
              <p>Coming Soon</p>
            </header>
          </Route>
          <Route path="/portfolio" exact>
            <header className="App-header">
              <h1>Portfolio</h1>
              <p>Coming Soon</p>
            </header>
          </Route>
          <Route path="/blog" exact>
            <header className="App-header">
              <h1>Blog</h1>
              <p>Coming Soon</p>
            </header>
          </Route>
          <Route path="/contact" exact>
            <h1>Contact Me</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
