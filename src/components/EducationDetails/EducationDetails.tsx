import React, { useEffect, useState } from "react";
import "./EducationDetails.scss"
// Define types for the education data
type EducationData = {
  id: number;
  title?: string;
  school?: string;
  type?: string;
  career?: string;
  city?: string;
  image?: string;
  date?: string;
  // Add any other properties based on your actual data structure
};
type titleData = {
  id: number;
  title?: string;
};
type openDetails = {
  openDetails: openDetails;
};
type EducationProps = {
  educationData: EducationData[];
  titles: titleData[];
};

function Education({ educationData, titles }: EducationProps) {
  // State for storing selected details, titles, data, and id
  const [details, setDetails] = useState<EducationData | null>(null);
  const [data, setData] = useState<EducationData[]>([]);
  const [id, setId] = useState<number | null>(null);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    // Populate data and titles from the imported data
    setData(educationData);
  }, [educationData]);

  // Function to handle selecting an education entry
  const handleSelect = (selectedId: number) => {
    const selectedEducation = data.find(
      (institution) => institution.id === selectedId
    );

    setDetails(selectedEducation || null);

    if (selectedEducation) {
      setId(selectedEducation.id);
    }

    console.log(details?.id);
    console.log(selectedEducation);
  };
  function close() {
    // navegate("/");
    ///setOpenDetails(true);
    setDetails(null)
  }

  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>

      <ul
        className={`education__subcontainer ${
          details
            ? "education__activeted education__subcontainer--subtitles"
            : ""
        }`}
      >
        {titles?.map((title) => (
          <li
            key={title.id}
            onClick={() => {
              handleSelect(title.id);
              setId(title.id);
            }}
            className={`education__subtitle ${
              details?.id === title.id ? "education__subtitle--active" : ""
            }`}
          >
            <h3>{title.title}</h3>
          </li>
        ))}
      </ul>

      {details || openDetails?(
        <div className="education__details">
          <section
            className={`institutions ${
              !openDetails ? "institutions__hide" : ""
            }`}
          >
            <ul className="institutions__container">
              <li className="institutions__list ">
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
                onClick={() => {
                  close();
                }}
                className="institutions__close"
              >
                <p> {"Close"}</p>
                <img className="institutions__icon"></img>
              </div>
            </div>
          </section>
        </div>
      ):""}
    </section>
  );
}

export default Education;
// <Institution details={details} />
