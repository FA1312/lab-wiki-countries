import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
