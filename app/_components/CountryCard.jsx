"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import statisticList from "../../public/_mocks_/statisticList"

const CountryCard = ({ country }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-end gap-4 m-4 relative"> {/* Added relative positioning here */}
      <Image
        src={`/${country.countryName}.png`}
        width={500}
        height={64}
        alt=""
        className="size-36 rounded-full object-cover bg-slate-200 p-4 mr-2"
      />

      <div>
        <h3 className="text-lg/tight font-bold text-gray-900">{country.countryName === "Turkey" ? "Türkiye" : country.countryName}</h3>

        <div className="grid grid-cols-4 gap-x-4 mt-0.5 text-gray-700">
          <Link
            href={`/executive-summary/${country?.countryName === "United Kingdom" ? "unitedKingdom" : country?.countryName}`}
            target="_blank"
            className="group relative block"
          >
            <button className="block rounded bg-yellow-400 mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Executive Summary
            </button>
          </Link>
          
          <Link
            href={`/return-policy-timeline/${country?.countryName === "United Kingdom" ? "unitedKingdom" : country?.countryName}`}
            target="_blank"
            className="group relative block"
          >
            <button className="block rounded bg-yellow-400 mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Return Policy Timeline
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/return-flow-chart/${country?.countryName === "United Kingdom" ? "unitedKingdom" : country?.countryName}`}
            className="group relative block"
          >
            <button className="block rounded bg-yellow-400 mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Return Procedures Flow Chart
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/actor-return-diagram/${country?.countryName === "United Kingdom" ? "unitedKingdom" : country?.countryName}`}
            className="group relative block"
          >
            <button className="block rounded bg-yellow-400 mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Actor Diagram
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/policy-legislation/`}
            className="group relative block"
          >
            <button className="block rounded bg-yellow-600 text-white font-bold mt-2 h-12 w-48 p-2 text-sm transition hover:scale-105">
              Policy/Legislation
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/return-infrastructure`}
            className="group relative block"
          >
            <button className="block rounded bg-yellow-600 text-white mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Return Infrastructure
            </button>
          </Link>
          <div className="relative" ref={dropdownRef}> {/* Ensure this has relative positioning and ref */}
            <button
              className="block rounded bg-yellow-600 text-white mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105"
              onClick={toggleDropdown}
            >
              Statistics <span className="float-right"><ChevronDown /></span> 
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full rounded bg-white shadow-lg z-50"> {/* Added z-50 here */}
              
              {statisticList.map((statistic,index) => {
          return (
         <Link key={index} href={`/statistics/${statistic.link}`} target="_blank" className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border">
            {statistic.name}
         </Link> 
        )
        })}
              </div>
            )}
          </div>
          {<Link
            href={
              ["Greece", "Iraq", "Morocco", "Poland", "Sweden"].includes(
                country?.countryName
              )
                ? `https://www.returnmigration.eu/countries_${country?.countryName.toLowerCase()}`: 
                    country?.countryName === "United Kingdom" ? `https://www.returnmigration.eu/united-kingdom` : `https://www.returnmigration.eu/countries-${country?.countryName.toLowerCase()}`
            }
            target="_blank"
            className="group relative block"
          >
            <button className="block rounded text-white bg-primary mt-2 h-12 w-48 p-2 text-sm font-bold transition hover:scale-105">
              Country Profile on GAPs <span className="float-right"><ExternalLink className="size-3"/></span> 
            </button>
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
