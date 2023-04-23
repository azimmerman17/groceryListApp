
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import AddUser from './components/addUser'
import AddFood from './components/AddFood';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Grocery App</h1>
        <Routes>
          {/* <Route exact path='/' element={} /> */}
          <Route path='/user/addUser' element={<AddUser />} /> 
          {/* <Route path='/foods' element={} /> */}
          <Route path='/foods/new' element={<AddFood />} />
          {/* <Route path='/grocerylist' element={} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
