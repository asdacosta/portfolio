import { useEffect, useState } from "react";
import Select from "react-select";
import connectStyles from "./Connect.module.css";

function FetchCountries({
  name,
  id,
  placeholder,
  handleFocus,
  handleBlur,
  handleChange,
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        data.sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

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
    control: (provided, state) => ({
      ...provided,
      fontSize: "1.1rem",
      fontWeight: "500",
      borderWidth: "0",
      borderRadius: "0.5rem",
      backgroundColor:
        state.isFocused || state.hasValue
          ? "white"
          : "rgba(255, 255, 255, 0.7)", // Customize dropdown indicator color
      "&:hover": {
        backgroundColor: "white",
      },
      transition: "background-color 0.3s ease-in-out",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(0, 204, 255)",
      color: "rgb(0, 0, 0)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(0, 6, 26)" : "rgb(0, 204, 255)",
      color: state.isSelected ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      padding: state.isSelected ? "0" : "0",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.65)",
      fontWeight: "500",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      width: "0",
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      paddingRight: "10px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgb(0, 6, 26)",
      "&:hover": {
        color: "rgba(0, 6, 26)",
      },
    }),
  };

  return (
    <>
      <Select
        name={name}
        id={id}
        className={connectStyles.Select}
        placeholder={placeholder}
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        options={options}
        styles={definedStyles}
      />
    </>
  );
}

export { FetchCountries };
