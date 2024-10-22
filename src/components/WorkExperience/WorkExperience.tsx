import { useEffect, useState } from "react";
import {
  JobExperienceProps,
  Base,
  JobExperienceData,
} from "../../apiData/Types";
import "./WorkExperience.scss";
import { useNavigate } from "react-router-dom";

import Titles from "../Titles/Titles";
import { workExperience } from "../../apiData/ApiData";
import BaseDetails from "../BaseDetails/BaseDetails";

function WorkExperience({ JobExperience, JobTitle }: JobExperienceProps) {
  // State to hold job details
  const [showDetails, setShowDetails] = useState<Base | undefined>(undefined);
  const [data, setData] = useState<JobExperienceData[]>([]);

  useEffect(() => {
    setData(data);
  }, [workExperience]);

  const handleSelect = (selectedId: number | undefined) => {
    const selectedDetails = data?.find(
      (position) => position.id === selectedId
    );
    setShowDetails(selectedDetails || undefined); // Ensure to handle null case

    console.log(selectedDetails);
  };

  const close = () => {
    setShowDetails(undefined);
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
