import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/blog.jpg";
import GymImage from "../images/realtime.png";
import ColourImage from "../images/movie.png";
import BackpackImage from "../images/whether.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="RealtimeChatApp" />
        <ProjectBox projectPhoto={FilmImage} projectName="BlogApp" />
        <ProjectBox projectPhoto={ColourImage} projectName="MovieApp" />
        <ProjectBox projectPhoto={BackpackImage} projectName="WhetherApp" />
      </div>
    </div>
  );
};

export default Projects;
