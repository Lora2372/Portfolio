import React from "react"
import Title from "./Title"
import Project from "./Project"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <StyledLinkCenterBtn to="/projects">
          Alla projekt
        </StyledLinkCenterBtn>
      )}
    </section>
  )
}

export default Projects
