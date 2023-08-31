import './App.css';
import Navbar from "./Components/Navbar";
import Biography from './Pages/Biography';
import HomePage from "./Pages/HomePage";
import Artworks from "./Pages/Artworks";
import Blog from "./Pages/Blog";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogInPage";
import OnSubscribe from './Pages/Subscription';
import { Routes, Route } from "react-router-dom";
import SignupPage from './Pages/SignUpPage';

function App() {
  return (
    <div className="App">
    <Navbar />


    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/biography' element={<Biography/>}></Route>
      <Route path='/artworks' element={<Artworks/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/media' element={<Media/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/subscription' element={<OnSubscribe/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
