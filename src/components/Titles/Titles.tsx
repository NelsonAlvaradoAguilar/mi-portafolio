import React from "react";
import { TitlesProps } from "../../apiData/Types"; // Import the shared type
import "./Titles.scss"
import "../EducationDetails/EducationDetails.scss"
function Titles({ titles, details, handleSelect }: TitlesProps) {
  return (
    <ul
      className={`titles ${
        details ? "titles__activated titles__subcontainer--subtitles" : ""
      }`}
    >
      {titles?.map((title) => (
        <li
          key={title?.id}
          onClick={() => handleSelect(title?.id)}
        >
          <h3
            className={`titles__subtitle ${
              details?.id === title?.id ? "titles_subtitle--active" : ""
            }`}
          >
            {title?.title}
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default Titles;
/*  className={`education__subtitle ${
              details?.id === title.id ? "education__subtitle--active" : ""
            }`}*/