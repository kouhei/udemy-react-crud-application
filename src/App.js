import React from 'react';

function App() {
  const greeting = "Hi!";
  const dom = <h1 className="foo">{greeting}</h1>;
  // return dom;

  return (
    <React.Fragment>
  <label htmlFor="bar">bar</label>
  <input id="bar" type="text" onChange={()=>{console.log("I am Clicked.");}}/>
    </React.Fragment>
  );
}

export default App;