"use client";
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
import { Tooltip as MuiTooltip } from "@mui/material";
import originalData from "../../public/_mocks_/originalData.json";
import Link from "next/link";
import { CircleHelp } from "lucide-react";

const ChartComponent = ({ data, title, countries }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [source, setSource] = useState([]);

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

  // Filter and map data according to the selected countries and years
  const filteredData = data.length
    ? Object.keys(data[0])
        .filter((key) => key.startsWith("year"))
        .map((yearKey) => {
          let yearEntry = { year: yearKey.replace("year_", "") };
          selectedCountries.forEach((country) => {
            const countryData = data.find(
              (entry) => entry.country === country
            );
            if (countryData) {
              yearEntry[country] = countryData[yearKey];
            }
          });
          return yearEntry;
        })
    : [];

  const filteredCountries = data.filter((entry) =>
    selectedCountries.includes(entry.country)
  );

  // Auto-select all countries for specific titles
  useEffect(() => {
    if (title.includes("Return by Citizenship")) {
      const allCountryNames = data.map((entry) => entry.country);
      setSelectedCountries(allCountryNames);
    }

    const foundData = originalData.find((item) => item.title.includes(title));
    setSource(foundData || "No results found");
  }, [title, data]);

  // Formatter function for legend and checkboxes
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
          {data.map((entry, index) => (
            <label key={index} className="mr-3 align-middle">
              {console.log("ent:", entry)}
              <input
                type="checkbox"
                value={entry.country}
                checked={selectedCountries.includes(entry.country)}
                onChange={() => handleCountryChange(entry.country)}
                className="align-middle mr-1"
              />
              {formatLegend(entry.country)}
            </label>
          ))}
        </div>
      )}
      <div width={1000} height={500}>
        <BarChart width={1000} height={600} data={filteredData} className="mt-6">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [value, formatLegend(name)]} />
          <Legend formatter={formatLegend} />
          {console.log("fC:", filteredCountries)}
          {filteredCountries.map((country, index) => (
            <Bar
              key={index}
              dataKey={country.country}
              fill={country.color || "#8884d8"} // default color if not specified
            />
          ))}
        </BarChart>
      </div>
      <div className="flex font-bold justify-between mt-4">
        <div className="flex gap-1">
          Original Data:
          <Link href={`${source?.originalData}`} target="_blank">
            <span className="font-normal text-primary">{source?.title}</span>
          </Link>
          <MuiTooltip
            title="The above data are secondary data compiled from different sources. Please click here to see
the original sources and access the raw data for the entire dataset. You will also find all
appendixes and attached original files, if available, stored in the REDCap for the Data
Repository via the public report link."
          >
            <CircleHelp className="size-3" color="#0d7dff" />
          </MuiTooltip>
        </div>
        <div className="font-bold text-primary">
          <Link href={"/data-entry-teams"}>Data Entry Teams</Link>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
