import {useState } from "react";
import { JobExperienceProps, JobExperienceData } from "../../apiData/Types";
import "./WorkExperience.scss";

import Titles from "../Titles/Titles";

function WorkExperience({ JobExperience, JobTitle }: JobExperienceProps) {
  const [showDetails, setShowDetails] = useState<JobExperienceData | null>(
    null
  );

  const handleSelect = (selectedId: number |void) => {
    const selectedDetails = JobExperience?.find(
      (position) => position.id === selectedId
    );
    setShowDetails(selectedDetails || null); // Ensure to handle null case

    console.log(selectedDetails);
  };

  const close = () => {
    setShowDetails(null);
  };

  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <Titles
        titles={JobTitle}
        handleSelect={handleSelect}
        details={showDetails}
      />

      {showDetails && (
        <div className="experience__description">
          {" "}
          <div className="job-details">
            <p className="job-details__text">
              {showDetails?.company}, {showDetails?.location}
            </p>
            <p className="job-details__text">
              {showDetails?.startDate} - {showDetails?.endDate}
            </p>
            <ul className="job-details__responsibilities">
              {showDetails.responsibilities?.map((responsibility, index) => (
                <li className="job-details__text" key={index}>
                  {responsibility}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                close();
              }}
              className="job-details__closeBtn"
            >
              {"close"}{" "}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkExperience;
/** onClick={() => {
         closeJobDescription()
        }} */
