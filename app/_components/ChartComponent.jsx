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
  ResponsiveContainer,
  ScatterChart,
  Scatter,
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

  let chartComponent;
  if (selectedChartType === "bar") {
    chartComponent = (
      <BarChart width={1260} height={500} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {filteredCountries.map((country, index) => (
          <Bar key={index} dataKey={country.countryName} fill={country.color} />
        ))}
      </BarChart>
    );
  } else {
    chartComponent = (
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <Legend />
        <CartesianGrid />
        <XAxis type="year" dataKey="Year" name="stature" unit="" />
        <YAxis type="number" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        {filteredCountries.map((country, index) => (
          <Scatter
            key={index}
            name={country.countryName}
            data={filteredData}
            dataKey={country.countryName}
            fill={country.color}
          />
        ))}
      </ScatterChart>
    );
  }

  return (
    <div>
      <div>
        <h3>Data Set</h3>
        <label>
          <input
            type="radio"
            value="data1"
            checked={selectedDataSet === "data1"}
            onChange={() => handleDataSetChange("data1")}
          />
          Dublin Returns
        </label>
        <label>
          <input
            type="radio"
            value="data2"
            checked={selectedDataSet === "data2"}
            onChange={() => handleDataSetChange("data2")}
          />
          Stock of Irregular Migrants
        </label>
      </div>
      <div>
        <h3>Country</h3>
        {Object.keys(data[0]).map((key) => {
          if (key !== "Year") {
            return (
              <label key={key}>
                <input
                  type="checkbox"
                  value={key}
                  checked={selectedCountries.includes(key)}
                  onChange={() => handleCountryChange(key)}
                />
                {key}
              </label>
            );
          }
        })}
      </div>
      <div>
        <h3>Chart Type</h3>
        <label>
          <input
            type="radio"
            value="bar"
            checked={selectedChartType === "bar"}
            onChange={() => handleChartTypeChange("bar")}
          />
          Bar Chart
        </label>
        <label>
          <input
            type="radio"
            value="scatter"
            checked={selectedChartType === "scatter"}
            onChange={() => handleChartTypeChange("scatter")}
          />
          Scatter Chart
        </label>
      </div>
      <h2>Chart:</h2>
      <ResponsiveContainer
        className="downloadimage"
        width={"100%"}
        height={300}
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
