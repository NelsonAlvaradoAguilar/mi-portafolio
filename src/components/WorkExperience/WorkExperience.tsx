import { useEffect, useState } from "react";
import { JobExperience, JobTitle } from "../../apiData/Types";
import { workExperienceTitles,workExperience } from "../../apiData/ApiData";
import { useNavigate } from "react-router-dom";

import { JobExperienceProps } from "../../apiData/Types"; // Import your JobExperience type
import Titles from "../Titles/Titles";

function WorkExperience({ JobExperience, }: JobExperienceProps) {
  // State to hold job details
  const [showDetails, setShowDetails] = useState<JobExperience | null>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const handleSelect = (selectedId: number | undefined) => {
    const selectedDetails = JobExperience?.find(
      (position) => position.id === selectedId
    );
    setShowDetails(selectedDetails || null); // Ensure to handle null case
    setOpen(true);
    console.log(showDetails);
    
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <Titles titles={workExperienceTitles} handleSelect={handleSelect} />
      {open && showDetails && <div className="experience__description"></div>}
    </section>
  );
}

export default WorkExperience;
