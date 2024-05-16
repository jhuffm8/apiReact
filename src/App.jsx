import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import StarshipsCard from './components/StarshipsCard';
import StarshipInfo from './components/StarshipsInfo';
import "./App.css"

function App() {
  const [ships, setStarShips] = useState(null);


  useEffect(() => {
    getStarShips();
  }, [])

  async function getStarShips() {
    try{
      const res = await fetch(`https://swapi.dev/api/starships`);
      if(!res.ok){
        throw new Error('Failed to get data')
      }
      const data = await res.json();
      setStarShips(data);

    } catch (err){
      console.log(err)
    }
  };




  const mappedShips = () => ships['results'].map(i => (<StarshipsCard  key={i.name} ship={i} url={i.url}/>))


  return (
    <Routes>
      <Route path="/ships" element=<div className='container'>{ships && mappedShips()}</div>/>
      <Route path="/ships/:id" element={<StarshipInfo />}/>
    </Routes>
  )
};

export default App
