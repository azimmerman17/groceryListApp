
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import AddUser from './Components/AddUser'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Grocery App</h1>
        <Routes>
          {/* <Route exact path='/' element={} /> */}
          <Route path='/user/addUser' element={<AddUser />} /> 
          {/* <Route path='/food' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
