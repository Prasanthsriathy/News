import React, { useState } from "react";
import NavScrollExample from '../src/News/Navbar';
import News from "./News/New";
import './App.css'

function App2() {

  const [search,setSearch] = useState("everything")
console.log(search,"kkk")

  return (
    <div className="App">
    
<NavScrollExample
setView={setSearch}
/>
<News
val={search}
/>
    </div>
  );
}

export default App2;
