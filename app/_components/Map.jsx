"use client";
import React, { memo, useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "@mui/material";
import countryProfileData from "../../public/countryProfile.json";
import ModalComponent from "./ModalComponent";

const MapChart = () => {
  const [content, setContent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [clickedCountry, setClickedCountry] = useState(null);

  useEffect(() => {
    const country = countryProfileData?.find(
      (country) => country?.countryName === clickedCountry?.name
    );
    setSelectedCountry(country);
  }, [clickedCountry]);

  // Modal:
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-8/12 h-full border-solid border-2 border-gray-400 px-6 py-0 m-6 border-r-4 rounded">
      <ModalComponent
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        selectedCountry={selectedCountry}
      />
      <ComposableMap className="w-full h-auto">
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo, index) => (
              <Tooltip key={index} title={content}>
                {geo.properties.color ? (
                  <Geography
                    className={
                      geo.properties
                        ? "cursor-pointer fill-primary hover:fill-destructive outline-none"
                        : ""
                    }
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (geo.properties.color)
                        setContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    onClick={() => {
                      setClickedCountry(geo.properties);
                      open ? handleClose() : handleOpen();
                    }}
                  />
                ) : (
                  <Geography
                    className={
                      geo.properties ? "fill-secondary outline-none" : ""
                    }
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (geo.properties.color)
                        setContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                  />
                )}
              </Tooltip>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
