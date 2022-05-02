
import { Route, Routes } from 'react-router-dom';
import Addservice from './Addservice/Addservice';
import './App.css';
import Blogs from './Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import Myitems from './components/Myitems/Myitems';
import RequredAuth from './components/Required/RequredAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/addservice' element={<Addservice></Addservice>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/myitem' element={
       <RequredAuth>
         <Myitems></Myitems>
       </RequredAuth>
       }></Route>
      
       <Route path='/inventory/:id' element={
          <RequredAuth>
            <Inventory></Inventory>
          </RequredAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
