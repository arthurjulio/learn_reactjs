
import { useState } from "react";
import "./App.css";
import MyBtn from './components/button'
import Input from "./components/h1";


function App() {
  const [angka, setAngka] = useState(0)

  return (
    <div >
      <Input >{angka}</Input>
      <MyBtn onClick={e => { setAngka(angka + 1) }} color="#333">asdsa</MyBtn>
    </div>
  );
}

export default App;
