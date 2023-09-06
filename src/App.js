import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Card from './Components/Card/Card';
import ErrorModel from './Components/ErrorModel/ErrorModel';

function App() {
  return (
    <div className="App">
      <AddUser/>
      <Card />
      <ErrorModel />
    </div>
  );
}

export default App;
