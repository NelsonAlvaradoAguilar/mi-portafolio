import {
  aboutMeData,
  educationData,
  educationDataTitles,
  workExperience,
  workExperienceTitles,
 projects

} from "../../apiData/ApiData";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../EducationDetails/EducationDetails";
import ProjectList from "../Projetcs/Projects";
import WorkExperience from "../WorkExperience/WorkExperience";

function MainBodyPage() {
  return (
    <>
      <AboutMe aboutMeData={aboutMeData} />

      <Education educationData={educationData} titles={educationDataTitles} />
 <WorkExperience JobExperience={workExperience} JobTitle={workExperienceTitles}/>
 <ProjectList />
    </>
  );
}

export default MainBodyPage;
