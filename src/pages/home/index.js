import React, { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import Intro from "./intro"
import Project from "./project"

const Home = (props) => {
  const [section, setSection] = useState("intro")

  const nextSection = (api) => {
    api.moveSectionDown()
  }
  return <ReactFullpage
    scrollingSpeed = {1000}
    anchors={["intro", "projects", "about"]}
    licenseKey={'62FCA1E2-FBC84B74-A2A90497-1DBA74EC'}
    onLeave={(_origin, destination) => setSection(destination.anchor)}
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <Intro active={section === "intro"} next={() => { nextSection(fullpageApi) }} />
        <Project next={() => { nextSection(fullpageApi) }} />
        <div className="section">
          next
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
}

export default Home
