import './App.css';
import { Route, Link } from 'react-router-dom';

function Home(props) {
  return <h1>Home Component</h1>;
}

function About(props) {
  return <h1>About Component</h1>;
}
function Work(props) {
  return <h1>Work Component</h1>;
}


function App() {
  return (
    <div className="App">
      <header>

        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/work'>work</Link>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />

      </header>
    </div>
  );
}

export default App;
