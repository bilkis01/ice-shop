import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Item/Home/Home';
import Navbar from './component/Item/Navbar/Navbar';
import About from './component/About/About'
import Menu from './component/Menu/Menu'
import Blog from './component/Blog/Blog'
import Pages from './component/Pages/Pages'
import Contact from './component/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/pages' element={<Pages></Pages>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  );
}

export default App;
