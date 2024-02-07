import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create a new audio object with the file
    const audio = new Audio('/nyancat.mp3');
    
    // Play the audio file when the component mounts
    audio.play()
      .catch(error => console.error("Error playing the audio file:", error));

    // Optional: Return a cleanup function to pause the audio if the component unmounts
    return () => audio.pause();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <div className='center-bottom'>
        <h1 className='jumbo'>Yes</h1>
      </div>
    </div>
  );
}

export default App;
