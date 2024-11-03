import { Link } from "react-router-dom";
import { DetailsProps } from "../../apiData/Types";
import "./Details.scss";

// Define props interface

const Details = ({ details, onClose, open }: DetailsProps) => {
  return (
    <ul className="details">
      <li className="details__li">
        <h2 className="details__title">{details?.projectTitle}</h2>
        <p className="details__description">{details?.description}</p>
      </li>
      <li>
        <div className="details__images">
          {details?.images?.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className="details__image"
              src={image}
              alt={`details ${details?.projectTitle} Image ${imgIndex}`}
            />
          ))}
        </div>
      </li>
      {details && (
        <>
          <li className="details__tech-stack">
            <h3>Tech Stack:</h3>
            <ul className="details__tech-stack">
              {details.techStack?.map((tech, techIndex) => (
                <li key={techIndex} className="details__tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
          <Link
            className="details__site-link"
            to={details.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </Link>
          <li>
            <img
              onClick={onClose}
              className={`details__dropdown ${
                open ? "details__dropdown--down" : ""
              }`}
              alt="Close detailss dropdown"
            />
          </li>
        </>
      )}
    </ul>
  );
};

export default Details;
