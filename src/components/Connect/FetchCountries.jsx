import { useEffect, useState } from "react";
import Select from "react-select";
import connectStyles from "./Connect.module.css";

function FetchCountries({
  name,
  id,
  placeholder,
  handleFocus,
  handleBlur,
  handleInput,
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const options = countries.map((country) => ({
    value: country.name.common,
    label: (
      <div className={connectStyles.subCountry}>
        <img
          src={country.flags.png}
          alt="Flag"
          width="20"
          style={{ marginRight: "10px" }}
        />
        {country.name.common}
      </div>
    ),
  }));

  const definedStyles = {
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(0, 204, 255)",
      color: "rgb(0, 0, 0)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(0, 6, 26)" : "rgb(0, 204, 255",
      color: state.isSelected ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      padding: state.isSelected ? "0" : "0",
    }),
  };

  return (
    <>
      <Select
        name={name}
        id={id}
        placeholder={placeholder}
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInputChange={handleInput}
        options={options}
        styles={definedStyles}
      />
    </>
  );
}

export { FetchCountries };
