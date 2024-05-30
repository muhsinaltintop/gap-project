"use client";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "@mui/material";
import countryProfileData from "../../public/_mocks_/countryProfile.json";
import NewModalComponent from "./ModalComponent";

const getCountryByCode = (code) =>
  countryProfileData.find((country) => country.countryName === code);

const MapChart = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedCountry) {
      setOpen(true);
    }
  }, [selectedCountry]);

  const handleCountryClick = (geo) => {
    const country = getCountryByCode(geo.properties.name);
    setSelectedCountry(country);
  };

  const handleMouseEnter = (geo) => {
    if (geo.properties.color) {
      setContent(`${geo.properties.name}`);
    }
  };

  const handleMouseLeave = () => {
    setContent("");
  };

  const renderGeography = (geo, index) => {
    const className = geo.properties.color
      ? "cursor-pointer fill-primary hover:fill-destructive outline-none"
      : "fill-secondary outline-none";

    return (
      <Tooltip key={index} title={content}>
        <Geography
          className={className}
          key={geo.rsmKey}
          geography={geo}
          onMouseEnter={() => handleMouseEnter(geo)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleCountryClick(geo)}
        />
      </Tooltip>
    );
  };

  return (
    <div className="w-6/12 h-full border-solid border-2 border-gray-400 px-4 m-6 border-r-4 rounded">
      <NewModalComponent
        open={open}
        handleClose={() => setOpen(false)}
        selectedCountry={selectedCountry}
      />
      <ComposableMap className="w-full h-auto">
        <Geographies geography="/features.json">
          {({ geographies }) => geographies.map(renderGeography)}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default React.memo(
  MapChart,
  (prevProps, nextProps) =>
    prevProps.selectedCountry === nextProps.selectedCountry
);
