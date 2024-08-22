"use client";
import React, { useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


import countries from "../../public/_mocks_/countryList.json";
import PageTitle from "./_atoms/PageTitle";

const ChartComponent = ({ data }) => {
  
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountryChange = (country) => {
    const index = selectedCountries.indexOf(country);
    if (index === -1) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      const newSelectedCountries = [...selectedCountries];
      newSelectedCountries.splice(index, 1);
      setSelectedCountries(newSelectedCountries);
    }
  };

  // Filter the data based on the selectedCountries state and the selected data set
  const filteredData = data
    .filter((entry) =>
      selectedCountries.every((country) =>
        Object.keys(entry).includes(country)
      )
    )
    .map((entry) => {
      let filteredEntry = { year: entry.year }; // Start with the year
      selectedCountries.forEach((country) => {
        filteredEntry[country] = entry[country]; // Add only the selected countries
      });
      return filteredEntry;
    });

  const filteredCountries = countries.filter((country) =>
    selectedCountries.includes(country.countryName)
  );

  // Formatter function for the legend and checkboxes
  const formatLegend = (value) => {
    switch (value) {
      case "unitedKingdom":
        return "United Kingdom";
      case "russianFederation":
        return "Russian Federation";
      case "bosniaAndHerzegowina":
        return "Bosnia and Herzegowina";
      case "otherTotal":
        return "Other Total";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  return (
    <div className="m-10">
      
      <div>
        <PageTitle/>
      </div>
      <div className="mt-4">
        <h3>Select Countries:</h3>
        {Object.keys(data[0]).map((key) => {
          if (key !== "id" && key !== "year") {
            return (
              <label key={key} className="mr-3 align-middle">
                <input
                  type="checkbox"
                  value={key}
                  checked={selectedCountries.includes(key)}
                  onChange={() => handleCountryChange(key)}
                  className="align-middle mr-1"
                />
                {formatLegend(key)}
              </label>
            );
          }
        })}
      </div>
      <div className="downloadimage" width={1000} height={500}>
        <BarChart width={1000} height={600} data={filteredData} className="mt-6">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip/>
          <Legend formatter={formatLegend} />
          {filteredCountries.map((country, index) => (
            <Bar key={index} dataKey={country.countryName} fill={country.color} />
          ))}
        </BarChart>
      </div>
      <button
        className="m-4"
        onClick={() =>
          saveSvgAsPng(
            document
              .getElementsByClassName("downloadimage")[0]
              .getElementsByTagName("svg")[0],
            "recharts.png"
          )
        }
      >
        download
      </button>
    </div>
  );
};

export default ChartComponent;
