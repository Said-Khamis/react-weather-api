import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FeelMessage from './components/FeelMessage';
import Header from './components/Header';
import OtherConditions from './components/OtherConditions';
import SearchWeather from './components/SearchWeather';
import Temperature from './components/Tempearature';
import Location from './components/Location';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const APP_ID = "4ade33f0d48a0649edcfc83c67170b2f"
  const DEFAULT_LOCALITIY = "Dar es salaam";

  const [searchResult , searchByCity ] = useState('');
  const [isLoading , setIsLoading ] = useState(false);

  console.log('Component is rendering');

  useEffect(() => {
    console.log('useEffect is running');
    setIsLoading(true);
    getDefaultTemperature();
  },[]);

  const showMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  const getDefaultTemperature = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_LOCALITIY}&appid=${APP_ID}`)
        .then((resp) => resp.json())
        .then((data) => {
            setIsLoading(false);
            console.log([data]);
            searchByCity([data]);
        }).catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
  }


  const toCent = (fromKelvin) => {
     return fromKelvin - 273.15;
  }

 if (!searchResult || !searchResult[0] || !searchResult[0].main || isLoading) {
   return (
    <div className="App">
     <div className="spinner-grow" style={{
         width: '3rem',
         height: '3rem',
         color: 'white'
      }} role="status">
      <span className="visually-hidden">Loading...</span>
     </div>
    </div>
  );
}

const onSearchWeather  = async (cityName) => {
  if(cityName===""){
    console.log("Empty Input");
    cityName = DEFAULT_LOCALITIY;
 }

 await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`)
 .then((resp) =>  resp.json())
 .then((data) => {
     if(data.cod === 200){
       searchByCity([data]);
     }else{
       showMessage(data.message);
       getDefaultTemperature();
     }
     setIsLoading(false);
     //console.log(data.hasOwnProperty("cod"));
 }).catch((error) => {
     //console.log(error);
     setIsLoading(false);
     searchByCity([]);
 });
}

  return (
    <div className="App">
        <Header />
        <ToastContainer />
        <SearchWeather onSearchWeather = {onSearchWeather} />
        <Location result={searchResult} />
        <Temperature result={searchResult} toCent = {toCent}/>
        <FeelMessage  result={searchResult} toCent = {toCent}/>
        <OtherConditions result={searchResult}/>
    </div>
  );
}

export default App;
