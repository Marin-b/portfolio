import React, { useState, useEffect, useContext } from "react";
import styled, { withTheme } from "styled-components"

import Projects from "./projects"
import { PopupContext } from "../../../App"
import { NextSection, SectionTitle } from "../components"




const Wrapper = styled.div`
  height: 100%;
  padding: 5vw;
  display: flex;
`


const LeftContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding-bottom: 5vh;
  @media (max-width: ${props => props.theme.splitTreshold}px) {
    width: 100%;
  }
`

const RightContainer = styled.div`
  flex-grow: 1;
  margin-left: 5vw;
`

const FiltersContainer =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.paragraph};
`


const ListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

const Filter = styled.div`
  transition: color 0.5s;
  cursor: pointer;
  color: ${props => props.active ? props.theme.colors[props.filter] : props.theme.colors.disabled }
`

const ProjectRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  transition: color 0.5s, font-size 0.2s;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.active ? props.theme.colors.dark : props.theme.colors.disabled };
  font-weight: 200;
  &:hover{
    font-size: 2.2em;
    font-weight: 300;
  }
`

const FILTERS = ["Ruby on Rails", "React", "Javascript"]


const StackIcon = styled.i`
  color: ${props => props.active ? props.theme.colors[props.stack] : props.theme.colors.disabled };
  transition: color 0.5s;
`

const Project = (props) => {
  const [filters, setFilters] = useState(["Ruby on Rails"])
  const [splitView, setSplitView] = useState(window.innerWidth >= props.theme.splitTreshold)
  const [selected, setSelected ] = useState(undefined)

  const { popupContent, setPopupContent } = useContext(PopupContext)

  useEffect(() => {
    if(!splitView && selected) {
      setPopupContent(selected.component)
    }
  }, [selected])

  useEffect(() => {
    if(selected) {
      setSelected(undefined)
    }
  }, [popupContent])

  const getStackIcon = (stack) => {
    switch(stack){
      case "Ruby on Rails":
        return <div style={{color: filters.includes(stack) ? props.theme.colors[stack] : props.theme.colors.disabled, transition: 'color 0.5s', height: '32px' }}>
          <span className="iconify" data-icon="octicon:ruby" data-inline="false"></span>
        </div>
      case "React":
        return <StackIcon className="fab fa-react" active={filters.includes(stack)} stack={stack} />
      case "Javascript":
        return <StackIcon className="fab fa-js" active={filters.includes(stack)} stack={stack} />
      default:
        return
    }
  }

  const toggleFilter = (filter) => {
     var index = filters.indexOf(filter);

    if (index === -1) {
        setFilters([...filters, filter])
    } else {
      const f = filters
      //let's filter the filters
      const newFilters = filters.filter(f => f !== filter)
      setFilters(newFilters);
    }
  }

  return(
    <div className="section" style={{position: 'relative'}}>
      <Wrapper>
        <LeftContainer>
          <SectionTitle>
            Projects.
          </SectionTitle>
          <FiltersContainer>
            {FILTERS.map(filter =>
              <Filter
              key={filter}
              onClick={() => toggleFilter(filter)}
              filter={filter}
              active={filters.includes(filter)}
              >
                {filter}
              </Filter>
            )}
          </FiltersContainer>
          <ListContainer>
            {Projects.map(project =>
              <ProjectRow
              key={project.name}
              mainStack={project.stack[0]}
              active={filters.includes(project.stack[0])}
              onClick={() => {setSelected(project)}}
              >
                <div>{project.name}</div>
               { getStackIcon(project.stack[0]) }
              </ProjectRow>
            )}
          </ListContainer>
        </LeftContainer>
        {splitView &&
          <RightContainer>
            {selected && <selected.component />}
          </RightContainer>
        }
        <NextSection next={props.nextSection} />
      </Wrapper>
    </div>
  )
}

export default withTheme(Project);
