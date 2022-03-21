import React from "react";
import "./Country.css";

function Country(props) {
  const {
    flag,
    name,
    capital,
    area,
    population,
    language,
    currency,
    currencySymbol,
  } = props;
  return (
    <div className="country-card">
      <div className="card-head">
        <img src={flag} alt="This is a country flag" className="flag" />
      </div>
      <div className="card-body">
        <div className="body-head">
          <h3 className="country-name">{name}</h3>
          <h4>Capital: {capital}</h4>
        </div>

        <div className="body-content">
          <p>Language: {language}</p>
          <p>
            Currency: {currency} (<span>{currencySymbol}</span>)
          </p>
          <p>Population: {population}</p>
          <p>Area: {area} km</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
