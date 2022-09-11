import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import BgMusic from './assets/mp3/Loving Caliber  I Wanna Be With You Daxten Remix.mp3';


function App() {
  useEffect(() => {
    const audio = document.getElementById('audio')

    audio.volume = Number(sessionStorage.getItem('volume') || 1.0);
    audio.onvolumechange = (e) => {
      sessionStorage.setItem('volume', audio.volume)
    }
  }, [])
  
  return (
    <div className="App">
        <AppRoutes />

        <audio src={BgMusic} autoPlay loop id="audio" hidden></audio>
    </div>
  );
}

export default App;
