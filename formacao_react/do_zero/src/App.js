import React, { useState } from "react";

const App = () => {
  const [usuarios, setUsuarios] = useState (
    ["Pablo", "José", "Manoel"]
  )
  return (
    <div className="App">
      <h1>Hello world</h1>
      {usuarios.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default App;
