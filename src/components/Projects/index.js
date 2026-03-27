import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on different projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === "UAV's" ?
            <ToggleButton active value="UAV's" onClick={() => setToggle("UAV's")}>UAV 'S</ToggleButton>
            :
            <ToggleButton value="UAV's" onClick={() => setToggle("UAV's")}>UAV 'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Applications' ?
            <ToggleButton active value="Applications" onClick={() => setToggle('Applications')}>Applications'S</ToggleButton>
            :
            <ToggleButton value="Applications" onClick={() => setToggle('Applications')}>Applications'S</ToggleButton>
          }
          <Divider />
          {toggle === 'AI' ?
            <ToggleButton active value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
            :
            <ToggleButton value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all'
            ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category.includes(toggle))
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects
