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
import originalData from "../../../public/_mocks_/originalData.json";


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
  
    const getCountryColor = (countryName) => {
      const country = countries.find((c) => c.countryName === countryName);
      return country ? country.color : "#8884d8";
    };
  
    // En yüksek 10 ve "Other Total" verisini al
    const top10AndOther = () => {
      const otherTotalValue = data[0]?.otherTotal || 0;
      const sortedData = Object.entries(data[0])
        .filter(([key]) => key !== "year" && key !== "id" && key !== "otherTotal")
        .sort(([, valueA], [, valueB]) => valueB - valueA)
        .slice(0, 10);
  
      const top10Countries = sortedData.map(([key]) => key);
      if (otherTotalValue > 0 && !top10Countries.includes("otherTotal")) {
        top10Countries.push("otherTotal");
      }
      return top10Countries;
    };
  
    // Alfabetik sıralama (Other Total sona gelecek şekilde)
    const sortCountries = (countries) =>
      countries.sort((a, b) => {
        if (a === "otherTotal") return 1;
        if (b === "otherTotal") return -1;
        return a.localeCompare(b);
      });
  
    const sortedSelectedCountries = sortCountries([...selectedCountries]);
  
    const filteredData = data.map((entry) => {
      const filteredEntry = { year: entry.year };
      sortedSelectedCountries.forEach((country) => {
        filteredEntry[country] = entry[country] || 0;
      });
      return filteredEntry;
    });
  
    const countriesWithData = countries.filter((country) =>
      top10AndOther().includes(country.countryName)
    );
  
    useEffect(() => {
      if (title.includes("Return by Citizenship")) {
        setSelectedCountries(top10AndOther());
      }
  
      const foundData = originalData.find((item) => item.title.includes(title));
      setSource(foundData || "No results found");
    }, [title]);
  
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
        <div className="mt-4">
          <h3>Select Countries:</h3>
          {countriesWithData
            .sort((a, b) => {
              if (a.countryName === "otherTotal") return 1;
              if (b.countryName === "otherTotal") return -1;
              return a.countryName.localeCompare(b.countryName);
            })
            .map((entry, index) => (
              <label key={index} className="mr-3 align-middle">
                <input
                  type="checkbox"
                  value={entry.countryName}
                  checked={selectedCountries.includes(entry.countryName)}
                  onChange={() => handleCountryChange(entry.countryName)}
                  className="align-middle mr-1"
                />
                {formatLegend(entry.countryName)}
              </label>
            ))}
        </div>
        <div width={1000} height={500}>
          <BarChart width={1000} height={600} data={filteredData} className="mt-6">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [
                value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                formatLegend(name),
              ]}
            />
            <Legend formatter={formatLegend} />
            {sortedSelectedCountries.map((country, index) => (
              <Bar
                key={index}
                dataKey={country}
                fill={getCountryColor(country)}
              />
            ))}
          </BarChart>
        </div>
      </div>
    );
  };
  
  export default ChartComponent;
  