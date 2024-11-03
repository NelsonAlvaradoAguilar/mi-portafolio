import React, { useEffect, useState } from "react";
import "./Projects.scss"
import { projects } from "../../apiData/ApiData";
import { Base, ProjectsProps } from "../../apiData/Types";
import Titles from "../Titles/Titles";
import Details from "../Details/Details";




const Project = ({titles,details}:ProjectsProps) => {
  const [capstone, setCapstone] = useState<ProjectsProps[]>([]);
  const [googleFit, setGoogleFit] = useState<ProjectsProps[]>([]);
 const [projectDetails, setProjectDetails] = useState<Base | null>(null);
 // const [projectList, setProjectList] = useState<Project[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
   // setCapstone(projects[0]);
   // setGoogleFit(projects[1]);
  //  setProjectList(projects);
  //  console.log(projectList);
  }, []);

  function openProject(selectedId: number | undefined ) {
    const selectedProject = projects.find((proj) => proj.id === selectedId);
    console.log(selectedProject);
    if (selectedProject) {
      setProjectDetails(selectedProject);
      setOpen(true);
    }
  }

  function close() {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <section className="project" id="projects">
      <h1 className="project__title">Projects</h1>

      {!open ? (
      <Titles titles={titles} handleSelect={openProject} details={details} image={details} />
      ) : (
        projectDetails && (
       <Details details={projectDetails} onClose={close} open={open}/>
          
        )
      )}
    </section>
  );
};

export default Project;