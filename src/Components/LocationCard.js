import React from "react";
import { GrLocation } from "react-icons/gr";

function LocationCard(props) {
  return (
    <div className="locations">
      <div className="location-cards">
        <img className="location-img" src={props.imageUrl} alt="" />

        <div className="info-group">
          <p>
            <GrLocation></GrLocation>{" "}
            <span className="location-title">{props.location} </span>
            <a href={props.googleMapsUrl} className="locationlink">
              View on Google Maps
            </a>
          </p>
          <h1>{props.title}</h1>
          <p>
            <b>
              {props.startDate} - {props.endDate}
            </b>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
