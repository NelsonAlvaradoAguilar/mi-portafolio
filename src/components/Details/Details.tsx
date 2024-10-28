
import { DetailsProps } from "../../apiData/Types";

const Details = ({ details, onClose}:DetailsProps) => {
  if (!details) return null;

  return (
    <div className="education__details">
      <section className="institutions">
        <ul className="institutions__container">
          <li className="institutions__list">
            <img
              className="institutions__image"
              alt={details.school}
              src={details.image}
            />
            <div>
              <h3>{details.school || details.company} {details.type}</h3>
              <p>{details.city ||details.location}</p>
              <p>{details.career || details.type}</p>
              <p>{details.date || details.startDate && details.endDate}</p>
            </div>
          </li>
        </ul>
        <div className="institutions__btn-container">
          <div onClick={onClose} className="institutions__close">
            <p>Close</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;