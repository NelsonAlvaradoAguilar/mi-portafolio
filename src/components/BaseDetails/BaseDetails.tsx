import React, { useEffect, useState } from "react";
import { Base, DetailsProps } from "../../apiData/Types";

function BaseDetails({ detailsBase }: DetailsProps) {
  const [details, setDetails] = useState<Base | null>(null);
  const [openDetails, setOpenDetails] = useState(false);

  // Function to close the details view
  function close() {
    setDetails(null);
    setOpenDetails(false);
  }

  // Function to open a specific detail
  const openDetail = (detail: Base) => {
    setDetails(detail);
    setOpenDetails(true);
  };

  return (
    <section className="education">
      <div className="education__details">
        <section
          className={`institutions ${
            !openDetails ? "institutions__hide" : ""
          }`}
        >
          <ul className="institutions__container">
            {detailsBase?.map((detail) => (
              <li
                className="institutions__list"
                key={detail.id}
                onClick={() => openDetail(detail)} // Open details for the clicked item
              >
                <div>
                  <h3>
                    {detail.school || detail.position}
                    {details?.type} {/* Ensure details is set before accessing */}
                  </h3>
                  <p>{detail.city}</p>
                  <p>{detail.career}</p>
                  <p>{detail.date}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="institutions__btn-container">
            <div onClick={close} className="institutions__close">
              <p>{"Close"}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default BaseDetails;