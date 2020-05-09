import React, { createContext, useState } from 'react';

import Theme from "./theme"
import { Navbar, Popup } from "./components"

import {
  Home
} from "./pages";

export const PopupContext = createContext(undefined)


function App() {
  const [popupContent, setPopupContent] = useState(undefined);

  return (
    <Theme>
      <div className="App">
        <PopupContext.Provider value={{ popupContent, setPopupContent }}>
          <Navbar />
          <Popup />
          <Home />
        </PopupContext.Provider>
      </div>
    </Theme>
  );
}

export default App;
