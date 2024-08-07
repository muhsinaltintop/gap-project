"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
        className="size-36 rounded-full object-cover bg-slate-200 p-4"
      />

      <div>
        <h3 className="text-lg/tight font-medium text-gray-900">{country.countryName}</h3>

        <div className="grid grid-cols-4 gap-x-4 mt-0.5 text-gray-700">
          <Link
            href={
              ["Greece", "Iraq", "Morocco", "Poland", "Sweden"].includes(
                country?.countryName
              )
                ? `https://www.returnmigration.eu/countries_${country?.countryName.toLowerCase()}`
                : `https://www.returnmigration.eu/countries-${country?.countryName.toLowerCase()}`
            }
            target="_blank"
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Country Profile On GAPs
            </button>
          </Link>
          <Link
            href={`/return-policy-timeline/${country?.countryName}`}
            target="_blank"
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Return Policy Timeline
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/return-flow-chart/${country?.countryName}`}
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Return Flow Chart
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/actor-return-diagram/${country?.countryName}`}
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Actor Return Diagram
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/policy-legislation-map/`}
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Policy/Legislation
            </button>
          </Link>
          <Link
            target="_blank"
            href={`/return-infrastructure`}
            className="group relative block overflow-hidden"
          >
            <button className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105">
              Return Infrastructure
            </button>
          </Link>
          <div className="relative" ref={dropdownRef}> {/* Ensure this has relative positioning and ref */}
            <button
              className="block w-full rounded bg-yellow-400 p-4 mt-2 text-sm font-medium transition hover:scale-105"
              onClick={toggleDropdown}
            >
              Statistics
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full rounded bg-white shadow-lg z-50"> {/* Added z-50 here */}
                <Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Stock of Irregular Migrant
                </Link>
                <Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Asylum Application
                </Link>
                <Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Entry Refusals and Pushbacks
                </Link>
                <Link
                  href={`/statistics/dublin-returns`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Dublin Returns
                </Link><Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  TCNs/Foreign Nationals Ordered to Leave
                </Link><Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Returns By Type
                </Link><Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Returns By Citizenship
                </Link><Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Alternative/Various Categories(National)
                </Link><Link
                  href={`/statistics/#`}
                  target="_blank"
                  className="block w-full p-2 text-sm text-gray-700 hover:bg-amber-600 hover:text-white border"
                >
                  Readmitted Citizens
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
