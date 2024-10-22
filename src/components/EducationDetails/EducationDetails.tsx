import React, { useEffect, useState } from "react";
import "./EducationDetails.scss";
import Titles from "../Titles/Titles";
import { EducationProps, EducationData } from "../../apiData/Types"

function Education({ educationData, titles }: EducationProps) {
  const [details, setDetails] = useState<EducationData | null>(null);
  const [data, setData] = useState<EducationData[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    setData(educationData);
  }, [educationData]);

  const handleSelect = (selectedId: number | undefined) => {
    const selectedEducation = data.find(
      (institution) => institution.id === selectedId
    );
    setDetails(selectedEducation || null);
console.log(selectedEducation);

    if (selectedEducation) {
      setId(selectedEducation.id);
    }
  };

  function close() {
    setDetails(null);
  }

  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>
      <div>
        <Titles titles={titles} handleSelect={handleSelect} details={details} />
      </div>

      {details || openDetails ? (
        <div className="education__details">
          <section
            className={`institutions ${
              !openDetails ? "institutions__hide" : ""
            }`}
          >
            <ul className="institutions__container">
              <li className="institutions__list">
                <img
                  className="institutions__image"
                  alt={details?.school}
                  src={details?.image}
                />

                <div>
                  <h3>
                    {details?.school}
                    {details?.type}
                  </h3>
                  <p>{details?.city}</p>
                  <p>{details?.career}</p>
                  <p>{details?.date}</p>
                </div>
              </li>
            </ul>
            <div className="institutions__btn-container">
              <div
                onClick={() => close()}
                className="institutions__close"
              >
                <p> {"Close"}</p>
             
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Education;
// <Institution details={details} />
