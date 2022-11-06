import OffcanvasExample from './components/navbar';
import GroupExample from './components/cardssection';
import CarouselFadeExample from './components/maincarousel';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/login-signup';
import Profile from './components/profile';
import Search from './components/search';

function App() {
  return (
    <BrowserRouter>
      <OffcanvasExample />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselFadeExample />
              <GroupExample titulo="Ultimos lanzamientos" />
              <GroupExample titulo="Mejores Peliculas" />
              <GroupExample titulo="Mejores series" />
            </>
          }
        />
        <Route path="/login" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
