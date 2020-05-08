import React, { useState, createContext } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Intro from "./intro"
import Project from "./project"
import About from "./about"


export const FullpageContext = createContext(undefined)


const Home = (props) => {
  const [section, setSection] = useState("intro")

  return <ReactFullpage
    scrollingSpeed = {1000}
    anchors={["intro", "about", "projects"]}
    licenseKey={'62FCA1E2-FBC84B74-A2A90497-1DBA74EC'}
    onLeave={(_origin, destination) => setSection(destination.anchor)}
    render={({ state, fullpageApi }) => (
      <FullpageContext.Provider value={fullpageApi}>
        <ReactFullpage.Wrapper>
          <Intro active={section === "intro"} />
          <About />
          <Project />
          <div className="section">
            next
          </div>
        </ReactFullpage.Wrapper>
      </FullpageContext.Provider>
    )}
  />
}

export default Home
