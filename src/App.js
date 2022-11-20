
import './App.css';
import Header from './components/Header';
import TrackList from './components/TrackList';
import Controller from './components/Controller';
import { MusicPlayerProvider } from "./Context/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList/>
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
