import React from "react";
import { TitlesProps } from "../../apiData/Types"; // Import the shared type

function Titles({ titles, details, handleSelect }: TitlesProps) {
  return (
    <ul
      className={`education__subcontainer ${
        details ? "education__activated education__subcontainer--subtitles" : ""
      }`}
    >
      {titles?.map((title) => (
        <li
          key={title?.id}
          onClick={() => handleSelect(title?.id)}
        >
          <h3
            className={`education__subtitle ${
              details?.id === title?.id ? "education__subtitle--active" : ""
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