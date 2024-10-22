import {
  aboutMeData,
  educationData,
  educationDataTitles,
  workExperience,
 

} from "../../apiData/ApiData";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../EducationDetails/EducationDetails";
import WorkExperience from "../WorkExperience/WorkExperience";

function MainBodyPage() {
  return (
    <>
      <AboutMe aboutMeData={aboutMeData} />

      <Education educationData={educationData} titles={educationDataTitles} />
 <WorkExperience JobExperience={workExperience}/>
    </>
  );
}

export default MainBodyPage;
