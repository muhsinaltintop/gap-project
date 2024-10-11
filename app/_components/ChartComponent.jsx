"use client"
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Tooltip as MuiTooltip } from '@mui/material';

import countries from "../../public/_mocks_/countryList.json";
import originalData from "../../public/_mocks_/originalData.json"
import Link from "next/link";
import { CircleHelp } from "lucide-react";

const ChartComponent = ({ data, title }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [source, setSource] = useState([])
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

  // useEffect to automatically select all countries when the title includes "Return by Citizenship"
  useEffect(() => {
    if (title.includes("Return by Citizenship")) {
      const allCountryKeys = Object.keys(data[0]).filter(
        (key) => key !== "id" && key !== "year"
      );
      setSelectedCountries(allCountryKeys); // Set all countries as selected
    }
    
    const foundData = originalData.find(item => item.title.includes(title));
    setSource(foundData || 'No results found');
    
  }, [title, data]);

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
      case "turkey":
        return "Türkiye";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  return (
    <div className="m-10">

      {!title.includes("Return by Citizenship") && (
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
            return null;
          })}
        </div>
      )}
      <div width={1000} height={500}>
        <BarChart width={1000} height={600} data={filteredData} className="mt-6">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend formatter={formatLegend} />
          {filteredCountries.map((country, index) => (
            <Bar key={index} dataKey={country.countryName} fill={country.color} />
          ))}
        </BarChart>
      </div>
      <div className="flex font-bold justify-between mt-4">
        <div className="flex gap-1">

            Original Data:
            <Link href={`${source?.originalData}`} target="_blank"> <span className="font-normal text-primary">

            {source?.title}
            </span>
            </Link>
            <MuiTooltip title="The above data are secondary data compiled from different sources. Please click here to see
the original sources and access the raw data for the entire dataset. You will also find all
appendixes and attached original files, if available, stored in the REDCap for the Data
Repository via the public report link.">
            <CircleHelp className="size-3" color="#0d7dff" />
            </MuiTooltip>
        </div>
        <div className="font-bold text-primary">
          <Link href={'/data-entry-teams'}>
          Data Entry Teams  
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default ChartComponent;
