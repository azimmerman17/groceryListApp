
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar'
import AddUser from './components/addUser'
import Home from './components/home';
import AddFood from './components/AddFood';

import FoodList from './components/FoodList'

import CurrentUserProvider from './Contexts/currentUser';
import GroceryList from './components/GroceryList';




function App() {
  return (
    <div className="App">
      <CurrentUserProvider>   
        <Router>
          <NavBar />
          <h1>Grocery App</h1>
          <Routes>
            <Route exact path='/' element={<Home />} /> 
            <Route path='/user/addUser' element={<AddUser />} /> 
            <Route path='/user/list' element={<GroceryList />} />
            <Route path='/foods/new' element={<AddFood />} />
            <Route path='/foods/foodlist' element={<FoodList />} />
          </Routes>
        </Router>
      </CurrentUserProvider>

    </div>
  );
}

export default App;
