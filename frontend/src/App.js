
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import AddUser from './components/addUser'

import Home from './components/home';

import AddFood from './components/AddFood';
import FoodList from './components/FoodList'



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Grocery App</h1>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          {/* <Route exact path='/' element={} /> */}
          <Route path='/user/addUser' element={<AddUser />} /> 
          {/*<Route path='/foods' element={<foods />} />  */}
          <Route path='/foods/new' element={<AddFood />} />
          <Route path='/foods/FoodList' element={<FoodList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
