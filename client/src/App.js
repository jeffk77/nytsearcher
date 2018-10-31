import React from 'react';
import Home from "./pages/Home";
// import Saved from "./pages/Saved";

const App = () => (
  <div className="container">
    <Home exact path="/" component={Home} />
    {/* <Saved exact path="/saved" component={Saved} /> */}
  </div>
)

export default App;
