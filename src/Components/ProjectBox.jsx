import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    RealtimeChatAppDesc:
      "This Web app is Created for chat purpose like people can be in contact with each other also including video-calling functionality ",
      RealtimeChatAppGithub: "https://github.com/keyuri30g/Real-Time-ChatApp",
      RealtimeChatAppWebsite: "https://talk-a-tive-7fgq.onrender.com/",

    MovieAppDesc:
      "This web app  is for helping you find your desired movie.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    MovieAppGithub: "https://github.com/keyuri30g/Movie-App",
    MovieAppWebsite: "/",

    BlogAppDesc:
      "Created a blog website where you can Explore captivating project details on our blog website, where we delve into the intricacies of innovative ventures, cutting-edge technologies, and inspiring success stories. ",
      BlogAppGithub: "/",
    BlogAppWebsite: "/",

    WhetherAppDesc:
      "This whether app is design to provide users with accurate and up-to-date weather forecasts.",
      WhetherAppGithub: "https://github.com/keyuri30g/Whether-App",
      WhetherAppWebsite: "/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
