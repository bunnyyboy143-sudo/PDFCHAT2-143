import {Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Chatpage from "./components/Chatpage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/chat" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
