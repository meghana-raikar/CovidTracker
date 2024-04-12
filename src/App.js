import { useState, useEffect } from 'react';
import './App.css';
import Background from './components/Background';
import  Nav  from './components/Nav';

function App() {
    const [selectedCountry, setSelectedCountry] = useState("India")
    const [fullData, setFullData] = useState([]);
    const [data, setData] = useState([]);

   const getCovidData = async () => {
     try {
       const res = await fetch("https://data.covid19india.org/data.json");
       const fullData = await res.json();
       setFullData(fullData.statewise[0]);
       setData(fullData.statewise);
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     getCovidData();
   }, []);

  return (
    <>
      <Nav data={data} setSelectedCountry={setSelectedCountry} />
      <Background fullData={fullData} selectedCountry={selectedCountry} />
    </>
  );
}

export default App;
