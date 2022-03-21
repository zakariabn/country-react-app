import React from "react";
import { useEffect, useState } from "react";
import Country from "./Country/Country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch(() => console.info("Data not found"));
  }, []);

  const language = (items) => {
    for (let item in items) {
      return items[item];
    }
  };

  const currency = (items) => {
    for (let key in items) {
      return key;
    }
  };

  const currencySymbol = (item) => {
    for (let key in item) {
      return item[key].symbol;
    }
  };

  return (
    <div className="country-container">
      {countries.map((country) => {
        const {
          cca3,
          name: { common, official },
          flags: { png, svg },
          capital,
          currencies,
          area,
          languages,
          population,
        } = country;

        return (
          <Country
            key={cca3}
            name={common}
            flag={png}
            capital={capital}
            currency={currency(currencies)}
            currencySymbol={currencySymbol(currencies)}
            area={area}
            language={language(languages)}
            population={population}></Country>
        );
      })}
    </div>
  );
};
export default Countries;
