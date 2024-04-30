"use client";
import React, { memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Tooltip } from "@mui/material";
import ModalComponent from "./ModalComponent";
import countryProfileData from "../../public/countryProfile.json";

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
    <div className="w-6/12 h-full border-solid border-2 border-gray-400 px-4 m-6 border-r-4 rounded">
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
                    style={{
                      default: {
                        fill: geo.properties.color
                          ? geo.properties.color
                          : "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: geo.properties.color ? "#F53" : "#D6D6DA",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ) : (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (geo.properties.color)
                        setContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      default: {
                        fill: geo.properties.color
                          ? geo.properties.color
                          : "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: geo.properties.color ? "#F53" : "#D6D6DA",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
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
