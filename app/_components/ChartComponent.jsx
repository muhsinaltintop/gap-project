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
  ResponsiveContainer
} from "recharts";
import data from "../../public/_mocks_/dublin_returns.json";
import data2 from "../../public/_mocks_/stock_of_im.json";
import countries from "../../public/_mocks_/countryList.json";

const ChartComponent = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedChartType, setSelectedChartType] = useState("bar");
  const [selectedDataSet, setSelectedDataSet] = useState("data1");

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

  const handleChartTypeChange = (chartType) => {
    setSelectedChartType(chartType);
  };

  const handleDataSetChange = (dataSet) => {
    setSelectedDataSet(dataSet);
  };

  // Filter the data based on the selectedCountries state and the selected data set
  const filteredData =
    selectedDataSet === "data1"
      ? data.filter((entry) =>
          selectedCountries.every((country) =>
            Object.keys(entry).includes(country)
          )
        )
      : data2.filter((entry) =>
          selectedCountries.every((country) =>
            Object.keys(entry).includes(country)
          )
        );

  // Filter the countries based on the selectedCountries state
  const filteredCountries = countries.filter((country) =>
    selectedCountries.includes(country.countryName)
  );


    const chartComponent = (
      <BarChart width={1000} height={600} data={filteredData} className="mt-6">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {filteredCountries.map((country, index) => (
          <Bar key={index} dataKey={country.countryName} fill={country.color} />
        ))}
      </BarChart>)

  return (
    <div className="m-10">
      <div>
        <h3 className="text-primary text-xl font-bold ">Dublin Returns</h3>

      </div>
      <div className="mt-4">
        <h3>Select Countries:</h3>
        {Object.keys(data[0]).map((key) => {
          if (key !== "Year") {
            return (
              <label key={key} className="mr-3 align-middle">
                <input
                  type="checkbox"
                  value={key}
                  checked={selectedCountries.includes(key)}
                  onChange={() => handleCountryChange(key)}
                  className="align-middle mr-1"
                />
                {key}
              </label>
            );
          }
        })}
      </div>
      <div>

      </div>
      <ResponsiveContainer
        className="downloadimage"
        width={1000}
        height={500}
      >
        {chartComponent}
      </ResponsiveContainer>
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
