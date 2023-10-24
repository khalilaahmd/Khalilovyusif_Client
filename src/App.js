import './App.css';
import Navbar from "./Components/Navbar";
import Biography from './Pages/Biography';
import HomePage from "./Pages/HomePage";
import Artworks from "./Pages/Artworks";
import Blog from "./Pages/Blog";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogInPage";
import OnSubscribe from '../src/Components/onSubscribeForm';
import { Routes, Route } from "react-router-dom";
import SignupPage from './Pages/SignUpPage';
import Projects from './Pages/Projects';
import ChristmasDesigns from './Pages/ProjectsFolder/ChristmasDesigns';
import ArtProjects from './Pages/ProjectsFolder/ArtProjects';
import SpecialEvents from './Pages/ProjectsFolder/SpecialEvents';
import Flowers from './Pages/ProjectsFolder/Flowers';
import BoutonniersAndGifts from './Pages/ProjectsFolder/BoutonniersAndGifts';
import Bouquets from './Pages/ProjectsFolder/Bouquets';
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
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/christmasDesigns' element={<ChristmasDesigns/>}></Route>
      <Route path='/artProjects' element={<ArtProjects/>}></Route>
      <Route path='/specialEvents' element={<SpecialEvents/>}></Route>
      <Route path='/flowers' element={<Flowers/>}></Route>
      <Route path='/boutonniersAndGifts' element={<BoutonniersAndGifts/>}></Route>
      <Route path='/bouquets' element={<Bouquets/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
