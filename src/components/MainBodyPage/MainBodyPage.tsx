
import {
  aboutMeData,
  educationData,

  workExperience,
  workExperienceTitles,
 projects

} from "../../apiData/ApiData";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../EducationDetails/EducationDetails";
import Project from "../Projetcs/Projects";

import WorkExperience from "../WorkExperience/WorkExperience";

function MainBodyPage() {


  return (
    <>
      <AboutMe aboutMeData={aboutMeData} />

      <Education educationData={educationData} titles={educationData} />
 <WorkExperience JobExperience={workExperience} JobTitle={workExperienceTitles}/>
<Project titles={projects} details={projects}/>
    </>
  );
}

export default MainBodyPage;
