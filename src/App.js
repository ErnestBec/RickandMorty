import axios from'axios';
import SearchBox from './components/SearchBox';
import './App.css';
import './Styles/LocationInfo.css'
import {useState, useEffect} from 'react';
import ListResidents from './components/ListResidents';
import LocationInfo from './components/LocationInfo';
import header from './rick-and-morty-en-nave.jpg'
function App() {

  const [location, setLocation] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) =>{
        setLocation(res.data);
      
      });
  }, []);



  return (
    <div className="App">

      <div className='header-img'>
        <img src={header} alt="" /> 
      </div>   

      <div className='section-Locinfo'>
        <h2>Rick and Morty</h2>
        <SearchBox setLocation={setLocation}/>
        <LocationInfo location = {location}/>
      </div>
    
      <ListResidents residents={location.residents}/>

    </div>
  );
}

export default App;
