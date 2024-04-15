//import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import WeatherDetailPage from './Pages/Weatherdetails'; // Adjust the path if necessary
import PagenotFound from './Pages/Pagenot';
import Aboutpage from './Pages/About';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:cityName" element={<WeatherDetailPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </Router>
  );
}

export default App;






