import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.jsx"
import Card from './components/Card.jsx';
import data from './data.js';

const cards=data.map((item) =>{
  return(
    <Card 
    id={item.div}
    {...item} />
  )
})

function App() {
  return (
    <div className="App">
        <Nav />
        {cards}
    </div>
  );
}

export default App;
