import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect( () => {
        tg.ready();
    }, [])



  return (
    <div className="App">
      <header className="App-header">
        work
          <button onClick={onClose}>Закрыть</button>
      </header>
    </div>
  );
}

export default App;
