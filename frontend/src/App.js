
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar'
import AddUser from './components/addUser'
import Home from './components/home';
import AddFood from './components/AddFood';
import CurrentUserProvider from './Contexts/currentUser';



function App() {
  return (
    <div className="App">
      <CurrentUserProvider>   
        <Router>
          <NavBar />
          <h1>Grocery App</h1>
          <Routes>
            <Route exact path='/' element={<Home />} /> 
            {/* <Route exact path='/' element={} /> */}
            <Route path='/user/addUser' element={<AddUser />} /> 
            {/* <Route path='/foods' element={} /> */}
            <Route path='/foods/new' element={<AddFood />} />
            {/* <Route path='/grocerylist' element={} */}
          </Routes>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
