import React from 'react';

import Theme from "./theme"
import {
  Home
} from "./pages";

function App() {
  return (
    <Theme>
      <div className="App">
        <Home />
      </div>
    </Theme>
  );
}

export default App;
