import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

function App() {


  function Clicked(event)
  {
    event.preventDefault();
    alert(Clicked);
  }




  return (
    <div className="App">
      <h1>Material UI</h1>
      <h2>button</h2>
      <Button variant="text" onClick={(event)=>{alert( Clicked(event));}}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </div>
  );
}

export default App;
