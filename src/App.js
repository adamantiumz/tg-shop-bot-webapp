import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect( () => {
        tg.ready();
    }, [])



  return (
    <div className="App">
      <header className="App-header">
        work
          <button onClick={onToggleButton}>Закрыть</button>
      </header>
    </div>
  );
}

export default App;
